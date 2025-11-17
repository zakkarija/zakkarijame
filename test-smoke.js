#!/usr/bin/env node

/**
 * Smoke Test - Ensures the Next.js app boots up correctly
 * This test verifies that the development server can start without errors
 */

const { spawn } = require('child_process');
const http = require('http');

console.log('🧪 Starting smoke test...\n');

let serverProcess;
let testPassed = false;

// Cleanup function
function cleanup(exitCode = 0) {
  if (serverProcess) {
    console.log('\n🧹 Cleaning up test server...');
    serverProcess.kill('SIGTERM');
  }
  process.exit(exitCode);
}

// Handle process termination
process.on('SIGINT', () => cleanup(1));
process.on('SIGTERM', () => cleanup(1));

// Start Next.js dev server
console.log('📦 Starting Next.js development server...');
serverProcess = spawn('npm', ['run', 'dev'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true
});

let output = '';
let errorOutput = '';

serverProcess.stdout.on('data', (data) => {
  output += data.toString();
  process.stdout.write(data);
});

serverProcess.stderr.on('data', (data) => {
  errorOutput += data.toString();
  process.stderr.write(data);
});

// Wait for server to be ready
setTimeout(() => {
  console.log('\n🔍 Checking if server is responsive...');

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    timeout: 5000
  };

  const req = http.request(options, (res) => {
    console.log(`✅ Server responded with status code: ${res.statusCode}`);

    if (res.statusCode === 200) {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        // Check if basic content is present
        const hasHtml = body.includes('<!DOCTYPE html>') || body.includes('<html');
        const hasNextScript = body.includes('_next') || body.includes('next');

        if (hasHtml && hasNextScript) {
          console.log('✅ Page content looks valid');
          console.log('\n🎉 Smoke test PASSED!\n');
          testPassed = true;
          cleanup(0);
        } else {
          console.error('❌ Page content invalid - missing expected HTML structure');
          cleanup(1);
        }
      });
    } else {
      console.error(`❌ Unexpected status code: ${res.statusCode}`);
      cleanup(1);
    }
  });

  req.on('error', (error) => {
    console.error(`❌ Request failed: ${error.message}`);
    console.error('\nPossible issues:');
    console.error('- Server failed to start');
    console.error('- Port 3000 is already in use');
    console.error('- Build errors in the application');
    cleanup(1);
  });

  req.on('timeout', () => {
    console.error('❌ Request timed out');
    cleanup(1);
  });

  req.end();
}, 10000); // Wait 10 seconds for server to start

// Timeout after 30 seconds total
setTimeout(() => {
  if (!testPassed) {
    console.error('\n❌ Test timed out after 30 seconds');
    cleanup(1);
  }
}, 30000);
