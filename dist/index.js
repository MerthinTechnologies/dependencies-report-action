'use strict';

var deps = require('@ced/deps');

const core = require("@actions/core");

async function run() {
  const path = core.getInput("path");
  const ignore = core.getInput("ignore");
  const nameMappings = core.getInput("name-mappings");
  const exclude = core.getInput("exclude");
  const output = core.getInput("output");
  deps.generateDependencies(path, ignore, nameMappings, exclude, output);
}

run();
