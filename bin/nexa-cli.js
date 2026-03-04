#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { copyFolder } from '../utils/copy-folder.js';

// ----- Parse CLI arguments -----
const args = process.argv.slice(2);
const projectName = args[1];

if (!projectName) {
    console.log("Usage: nexa init <project-name> [--use-template <template-name>]");
    process.exit(1);
}

// Optional template argument
let templateIndex = args.indexOf('--use-template');
let templateName = null;
if (templateIndex !== -1 && args[templateIndex + 1]) {
    templateName = args[templateIndex + 1];
}

// ----- Paths -----
const templatesPath = path.join(path.dirname(process.argv[1]), '../templates');
const availableTemplates = fs.readdirSync(templatesPath).filter(f => fs.lstatSync(path.join(templatesPath, f)).isDirectory());

// Determine template to use
if (!templateName) {
    templateName = availableTemplates[0]; // default = first folder
} else if (!availableTemplates.includes(templateName)) {
    console.error(`Template "${templateName}" not found. Available templates: ${availableTemplates.join(', ')}`);
    process.exit(1);
}

const templatePath = path.join(templatesPath, templateName);

// ----- Project folder -----
const projectPath = path.join(process.cwd(), projectName);
if (fs.existsSync(projectPath)) {
    console.error("Error: Folder already exists!");
    process.exit(1);
}
fs.mkdirSync(projectPath);

// ----- Copy the whole template as-is -----
copyFolder(templatePath, projectPath);

console.log(`✅ Nexa project "${projectName}" created using template "${templateName}"!`);
console.log(`Next steps: cd ${projectName} & start coding!`);