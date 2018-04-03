#!/usr/bin/env node

const { join } = require('path');
const { exec } = require('child_process');

const env = {
    ...process.env,
    PATH: process.env.PATH + ':' + join(__dirname, 'node_modules', '.bin')
};

exec('ls | ipt -m -M "Select items to delete:" | xargs trash', { env });
