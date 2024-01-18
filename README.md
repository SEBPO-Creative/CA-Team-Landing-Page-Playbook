# SOP for CitrusAd Team’s Landing Page Standard Coding, Testing, and Deployment

## Document Control Information
- Creation Date: Monday, 25 December 2023
- Last Update: Monday, 26 December 2023
- Last Update By: Shafayatul Islam Pavel, Creative Development Manager
- Document Author: Shafayatul Islam Pavel, Creative Development Manager
- Document Owner: Creative Development, ServicEngine Ltd.
- Reviewed by: Saiful Momen, Operation Manager, Creative Development
- Approved by: Saiful Momen, Operation Manager, Creative Development
- Document ID:
- Document Version: 1.00

## Purpose
To ensure consistent and high-quality delivery of landing pages, this SOP outlines the standards and procedures for coding, testing, and deploying landing pages.

## Scope
This SOP applies to all landing pages developed by the SEBPO CitrusAd team, regardless of the technology stack used.

## Responsibility
- Developers: Responsible for implementing the landing page according to the approved design and requirements.
- QA Engineers: Responsible for testing the landing pagxe and reporting any defects or issues.
- Developers: Responsible for deploying the landing page to the production environment.
Team Leader: Responsible for overseeing the entire process and ensuring that the landing page meets the client's requirements and is delivered on time.

## Framework: 
- Each of the landing page should be developed by using this library or framework [Blaze UI](https://www.blazeui.com/)
- To ensure consistency and avoid style conflicts, production must exclusively utilize only using the CSS and js framework from CDN 
- [blaze.css CDN](https://unpkg.com/@blaze/css/dist/blaze/blaze.css) 
- [CitrusStylesSE.css CDN](https://ca-team-landing-page-playbook.pages.dev/CitrusStylesSE.css)
- [CitrusStylesSE.js CDN](https://ca-team-landing-page-playbook.pages.dev/CitrusStylesSE.js)
- [Placeholders Images](https://picsum.photos/)
- Inline styles and multiple external CSS files are prohibited.

## Naming Convention:
- The team should utilize BEM methodologies and SMACSS architecture to organize their CSS and CSS rules.
- To prevent conflicts with existing code, always use the `citrusStylesSE` prefix when naming classes, IDs, functions, variables, and other CSS elements in your stylesheets. This will help differentiate your styles from those already present in the codebase, making it easier to manage and maintain the code. For example, instead of using a class name like `.button`, use `.citrusStylesSE-button`. Similarly, instead of using an ID like `#header`, use `#citrusStylesSE-header`. This convention will help ensure that your styles don't accidentally override existing styles or cause unintended consequences. Remember, consistency is key when it comes to writing clean, maintainable code. By following this convention, you'll make it easier for yourself and others to understand and modify the code in the future.

## Code Organization:
- Code should be organized, readable, and maintainable, with clear and descriptive variable names and comments.
- Use clear and consistent file naming conventions.
- Organize code into logical sections for readability and maintainability.
- Employ comments to explain code functionality and non-obvious logic.

## Coding Standards:
- Follow established HTML and CSS coding best practices.
- Use version control systems to track changes and collaborate with team members.
- Adhere to accessibility guidelines (e.g., WCAG).
- Ensure that all code is tested and validated before moving to the next phase.

## Coding Optimization:
- Use HTML, CSS, and JavaScript for building the landing page, unless otherwise specified by the task requirements.
- Follow the responsive design principles to ensure that the landing page looks good on all devices and screen sizes.
- Optimize images and graphics to minimize load times and improve page speed.
- Use appropriate meta tags, alt tags, and descriptions for SEO optimization.

## Code Reviews:
**HTML:**
- Validate HTML structure: Check that the HTML structure is valid and meets the standards defined by the W3C. Use tools like the W3C Markup Validator to identify errors and warnings.
- Verify semantic elements: Make sure that the HTML elements used on the page are semantically correct, meaning they describe the content and its purpose accurately. For example, use `<h1>` for headings, `<nav>` for navigation, `<main>` for main content, and so on.
- Check accessibility attributes: Ensure that the HTML includes appropriate accessibility attributes, such as alt text for images, label text for form inputs, and role="button" for buttons. This will help users with disabilities interact with the page more easily.
- Confirm proper heading hierarchy: Verify that the page has a logical heading hierarchy, starting with a single `<h1>` element and followed by subheadings (`<h2>`, `<h3>`, etc.) that are nested inside their respective sections.
- Analyze meta tags: Check that the page includes essential metadata, such as title, description, keywords, and robots directives. These tags provide information about the page's content and help search engines understand its relevance and indexability.
- Check for broken links: Verify that all internal and external links on the page are functional and point to the intended resources. You can use tools like Selenium or Cypress to automate this process.
- Test responsive design: Ensure that the page layout adapts correctly to various screen sizes and devices, including desktops, laptops, tablets, and smartphones. You can use tools like Chrome DevTools or Responsinator to test responsiveness.

**CSS:**
- Validate CSS syntax: Use tools like the CSS Validator or the browser's developer console to check for syntax errors and warnings in the CSS code.
- Verify consistent styling: Ensure that the page maintains consistent styling throughout, including font styles, colors, spacing, and padding. Use tools like Chrome DevTools to inspect element styles and verify consistency.
- Check for unused CSS selectors: Identify any unused CSS selectors or styles that are not applied to any elements on the page. Remove these unnecessary styles to optimize the CSS code and minimize load times.
- Test CSS media queries: Verify that the CSS media queries are properly defined and apply the expected styles based on device screen size, orientation, or other conditions.
- Analyze CSS performance: Evaluate the impact of CSS on page load times and optimization. Consider techniques like minifying, concatenating, or compressing CSS files to improve performance.
- Check for inline styles: Avoid using inline styles whenever possible. Instead, move styles to an external stylesheet or a `<style>` block. Inline styles can make maintenance and updates more challenging.
- Review CSS comments: Ensure that the CSS code includes clear and concise comments that explain the reasoning behind specific style choices and aid in future maintenance.

**JavaScript:**
- Validate JavaScript syntax: Use tools like JSLint or the browser's developer console to check for syntax errors and potential issues in the JavaScript code.
- Verify functionality: Test the page's interactive elements, such as forms, buttons, and menus, to ensure they function correctly and trigger the expected actions.
- Check for conflicts: Identify any potential conflicts between different JavaScript libraries or versions, especially if you're using third-party scripts or frameworks.
- Test event listeners: Verify that event listeners are properly attached to elements and functions, and that they execute the expected behavior when triggered.
- Analyze JavaScript performance: Assess the impact of JavaScript on page load times and optimization. Minimizing the usage of JavaScript can improve page performance.
- Review JavaScript comments: Similar to CSS comments, ensure that the JavaScript code includes clear and concise comments that explain the reasoning behind specific code choices and aid in future maintenance.
- Test browser compatibility: Ensure that the page works correctly across different browsers and versions, including Chrome, Firefox, Safari, Edge, and Internet Explorer. You can use tools like BrowserStack or Sauce Labs to test browser compatibility.

By following these guidelines, you can thoroughly test your HTML, CSS, and JavaScript landing page to ensure it meets the highest standards for quality, accessibility, and user experience.

## Testing:
QA reviewer will perform thorough testing of the landing page, including but not limited to:

**Validation:**
- Use W3C HTML and CSS validators to ensure code compliance with standards.
- Check for cross-browser and cross-device compatibility.
**Functionality Testing:**
- Thoroughly test all interactive elements (buttons, forms, links, etc.).
- Verify content rendering and responsiveness across different screen sizes.
- Conduct user testing to gather feedback on usability and identify potential issues.
**Performance testing:** 
- Check page load times, browser compatibility, and mobile responsiveness
**Security testing:** 
- Identify vulnerabilities and weaknesses in the code
**User acceptance testing:** 
- Ensure that the landing page meets the client's requirements and expectations
**QA Process for Landing Page**
- The QA reviewer will document all defects and issues found during testing and report them to the development team.
- Developers will fix the reported issues and update the landing page accordingly.
- The QA reviewer will retest the updated landing page to ensure that all issues have been resolved.
- Passing this QA checklist is mandatory for each landing page during every testing phase.

## Post-Deployment Activities:
**Pre-Deployment Checks:**
- Perform final code review and testing in a staging environment in the Github.
- Obtain necessary approvals for deployment.
**Deployment Process:**
- Prepare landing page handoff files and upload to the designated server location.
- Configure server settings as needed (e.g., redirects, caching).
- Thoroughly test the deployed landing page in the live and staging environment.
**Post-Deployment Monitoring:**
- Monitor the landing page's performance and make adjustments as needed to optimize its loading speed, and overall user experience.
- Address any issues or bugs that arise promptly.
- Provide training and support to the client on how to use and maintain the landing page if needed.
- Continuously monitor the landing page's security and address any potential vulnerabilities if needed.

## Deployment:
- Once the landing page has passed all testing phases, it will be deployed to the production environment.
- Developer will handle the deployment process, which includes uploading the files to the web server, configuring DNS settings, and setting up analytics and tracking codes.
- The deployed landing page will be reviewed by the project manager and QA engineer to ensure that it matches the approved design and functions correctly.

## Documentation:
- Maintain accurate and up-to-date documentation throughout the entire process, including design mockups, code snippets, testing plans, css or html selectors and deployment instructions.
- Document any lessons learned or challenges faced during the task, and use them to improve future landing page development processes.

## Version Control:
- [SEBPO Github Repository Location](https://github.com/SEBPO-Creative/CitrusAd-LP)
- All code changes must be made through pull requests: No direct commits to the development branch are allowed. Every change should be submitted as a pull request, which allows for review and discussion before merging.
- Follow the "one commit, one change" rule: Each commit in a pull request should contain only one change, and the commit message should clearly describe what was changed. This makes it easier to track changes and revert if necessary.
- Keep branches organized: Use descriptive names for branches, such as feature/new-feature or bugfix/fix-critical-bug. This helps keep the branching system organized and easy to understand.
- Regularly merge into development: Merge approved pull requests into the development branch regularly to keep the codebase up-to-date.
- Use descriptive commit messages: Commit messages should include a brief summary of the change, why it was made, and any relevant context. This helps others understand the intent behind the change and makes it easier to troubleshoot issues later.
- Use labels and milestones: Labels and milestones can help organize issues and prioritize work. Use labels to categorize issues by type (e.g., bug, feature request, technical debt) and milestones to mark important deadlines or releases.
- Keep the repository clean: Regularly remove old, unused branches and tags to keep the repository tidy. This also helps avoid confusion around which branches are still being actively worked on.
- Follow a coding style guide: Consistency in coding style makes the codebase easier to read and understand. Choose a style guide (such as Airbnb's JavaScript Style Guide) and enforce it across the team.
- Use GitFlow: GitFlow provides a structured approach to managing features, hotfixes, and releases. It helps ensure that changes are properly tested and reviewed before being merged into the main branch.
- Regularly back up the repository: Backups protect against data loss due to accidents or malicious activity. Schedule regular backups of the repository to ensure that the team's work is safe.
- Use two-factor authentication: Two-factor authentication adds an extra layer of security to prevent unauthorized access to the repository. Enable 2FA for all team members who have access to the repository.
- Limit collaborator permissions: Only grant collaborators the minimum privileges they need to perform their work. This reduces the risk of accidental damage or malicious activity.
- Use protected branches: Protected branches restrict who can push to certain branches, ensuring that critical branches remain stable and secure. Use protected branches for sensitive areas of the codebase, such as the production environment.
- Enable branch restrictions: Branch restrictions allow you to limit which branches can be pushed to and which branches can be merged. Use branch restrictions to enforce workflows and prevent mistakes that could break the build or deployment process.
- Use GitHub's built-in code review tool: GitHub offers a built-in code review tool that allows team members to review each other's changes before they're merged into the main branch. Use this tool to catch bugs and inconsistencies early in the development process.
- By following these rules, the development branch will be a place where team members can collaborate and iterate on features and fixes, while ensuring that the code remains stable and secure.

## Conclusion:
Following this SOP will help ensure that our landing pages are developed efficiently, effectively, and consistently, resulting in higher-quality deliverables and increased customer satisfaction.

## Reference or Related Document
- [Blaze UI: Geeksforgeeks](https://www.geeksforgeeks.org/blaze-ui/)
- [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes)
- [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
- [SEBPO CitrusAd Team Github Repository](https://github.com/SEBPO-Creative/CitrusAd-LP)
- [Scalable and Modular Architecture for CSS](https://smacss.com/book/applicability/)
- [BEM — Block Element Modifier](https://getbem.com/)
- [What is Prefix, Base Word, Suffix](https://ies.ed.gov/ncee/rel/regions/southeast/pdf/prefix_base_word_suffix.pdf)
- [Migrating from GitHub to jsDelivr](https://www.jsdelivr.com/github)
- [Placeholders Images](https://picsum.photos/)
