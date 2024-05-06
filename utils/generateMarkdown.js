// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return ``;
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return ``;
  } else {
    return `- [Licensing](#licensing)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return ``;
  } else {
    return `## Licensing 
    This project is licensed under ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  # Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  "${data.usage}"

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions
  Here is a link to my GitHub Profile [${data.gitUser}](https://github.com/${data.gitUser}) and the [GitHub Repository](https://github.com/${data.gitUser}/${data.repo}) for this project.

  If you would like to ask any questions you can reach me via email at:
  - ${data.email}'
  `;
}

module.exports = generateMarkdown;
