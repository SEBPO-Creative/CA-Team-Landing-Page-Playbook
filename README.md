# SOP for CitrusAd Team’s Landing Page Standard Coding, Testing, and Deployment

### Document Control Information
- Creation Date: Monday, 25 December 2023
- Last Update: Monday, 26 December 2023
- Last Update By: Shafayatul Islam Pavel, Creative Development Manager
- Document Author: Shafayatul Islam Pavel, Creative Development Manager
- Document Owner: Creative Development, ServicEngine Ltd.
- Reviewed by: Saiful Momen, Operation Manager, Creative Development
- Approved by: Saiful Momen, Operation Manager, Creative Development
- Document ID:
- Document Version: 1.00

### Purpose
To ensure consistent and high-quality delivery of landing pages, this SOP outlines the standards and procedures for coding, testing, and deploying landing pages.

### Scope
This SOP applies to all landing pages developed by the SEBPO CitrusAd team, regardless of the technology stack used.

### Responsibility
- Developers: Responsible for implementing the landing page according to the approved design and requirements.
- QA Engineers: Responsible for testing the landing page and reporting any defects or issues.
- Developers: Responsible for deploying the landing page to the production environment.
Team Leader: Responsible for overseeing the entire process and ensuring that the landing page meets the client's requirements and is delivered on time.

### Framework: 
- Each of the landing page should be developed by using this library or framework [Blaze UI](https://www.blazeui.com/)
- To ensure consistency and avoid style conflicts, production must exclusively utilize only using the CSS and js framework from CDN 
- [blaze.css CDN](https://unpkg.com/@blaze/css/dist/blaze/blaze.css) and 
- [CitrusStylesSE.css CDN](https://cdn.jsdelivr.net/gh/SEBPO-Creative/CA-Team-Landing-Page-Playbook@main/CitrusStylesSE.css)
- [CitrusStylesSE.js CDN](https://cdn.jsdelivr.net/gh/SEBPO-Creative/CA-Team-Landing-Page-Playbook@main/CitrusStylesSE.js)
- Inline styles and external CSS files are prohibited.

### Naming Convention:
- The team should utilize BEM methodologies and SMACSS architecture to organize their CSS and CSS rules.
- To prevent conflicts with existing code, always use the `CitrusStylesSE` prefix when naming classes, IDs, functions, variables, and other CSS elements in your stylesheets. This will help differentiate your styles from those already present in the codebase, making it easier to manage and maintain the code. For example, instead of using a class name like `.button`, use `.CitrusStylesSE-button`. Similarly, instead of using an ID like `#header`, use `#CitrusStylesSE-header`. This convention will help ensure that your styles don't accidentally override existing styles or cause unintended consequences. Remember, consistency is key when it comes to writing clean, maintainable code. By following this convention, you'll make it easier for yourself and others to understand and modify the code in the future.

### Code Organization:
- Code should be organized, readable, and maintainable, with clear and descriptive variable names and comments.
- Use clear and consistent file naming conventions.
- Organize code into logical sections for readability and maintainability.
- Employ comments to explain code functionality and non-obvious logic.

### Coding Standards:
- Follow established HTML and CSS coding best practices.
- Use version control systems to track changes and collaborate with team members.
- Adhere to accessibility guidelines (e.g., WCAG).
- Ensure that all code is tested and validated before moving to the next phase.

### Coding Optimization:
- Use HTML, CSS, and JavaScript for building the landing page, unless otherwise specified by the task requirements.
- Follow the responsive design principles to ensure that the landing page looks good on all devices and screen sizes.
- Optimize images and graphics to minimize load times and improve page speed.
- Use appropriate meta tags, alt tags, and descriptions for SEO optimization.

### Testing:
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

### Deployment:
- Once the landing page has passed all testing phases, it will be deployed to the production environment.
- Developer will handle the deployment process, which includes uploading the files to the web server, configuring DNS settings, and setting up analytics and tracking codes.
- The deployed landing page will be reviewed by the project manager and QA engineer to ensure that it matches the approved design and functions correctly.

### Post-Deployment Activities:
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

### Documentation:
- Maintain accurate and up-to-date documentation throughout the entire process, including design mockups, code snippets, testing plans, css or html selectors and deployment instructions.
- Document any lessons learned or challenges faced during the task, and use them to improve future landing page development processes.

### Version Control:
- Use a version control system (e.g., Git) to track changes, manage code versions, and facilitate collaboration.
- To ensure clear separation of development and production stages, all development activities should be conducted on the designated development branch. Client reviews will happen using the production branch accessed through staging links, guaranteeing a final review of the content as it will appear on the live website.
- To ensure smooth deployment and maintainability, final deliverables will be sourced from the main branch, which will also serve as the foundation for future updates.

### Code Reviews:
- Conduct regular code reviews to ensure quality, identify potential issues, and promote knowledge sharing.

### Keeping CitrusStylesSE Framework Consistent:
- Adding new styles to CitrusStylesSE requires both careful consideration and clear documentation. This ensures consistency, maintainability, and avoids confusion for the team moving forward. Here's how:
Explain your reasons:
- Before diving into code, document the need for the new style. Explain the problem it solves or the improvement it brings. This context helps others understand the purpose and value of the change.
Document the changes: 
- Once you've written the new code, document it meticulously. This includes:
- A descriptive comment within the code itself: Briefly explain what the new style does and how it's used.
- An update in the CitrusStylesSE framework documentation: Explain the new style within the existing documentation, including how to use it and potential interactions with other styles.
- Visual examples: Screenshots or code snippets showcasing the new style in action can be incredibly helpful for understanding its impact.
Share and discuss:
- Present your changes to the team, explaining the rationale, documentation updates, and visual examples. This transparency fosters collaboration, identifies potential conflicts, and ensures everyone's on the same page.
Remember:
- Documenting new styles takes time, but it pays off in the long run.
- Clear explanations and visual aids make understanding and using the new style easier for everyone.
- Consistent documentation keeps CitrusStylesSE framework clean, maintainable, and a pleasure to work with.
By following these steps, we can ensure that all additions to the CitrusStylesSE framework are well-informed, documented, and understood by the entire team. This collaborative approach contributes to a stronger, more cohesive framework for everyone to build upon.

### Conclusion:
Following this SOP will help ensure that our landing pages are developed efficiently, effectively, and consistently, resulting in higher-quality deliverables and increased customer satisfaction.

### Reference or Related Document
- [Blaze UI: Geeksforgeeks](https://www.geeksforgeeks.org/blaze-ui/)
- [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes)
- [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
- [SEBPO CitrusAd Team Github Repository](https://github.com/SEBPO-Creative/CitrusAd-LP)
- [Scalable and Modular Architecture for CSS](https://smacss.com/book/applicability/)
- [BEM — Block Element Modifier](https://getbem.com/)
- [What is Prefix, Base Word, Suffix](https://ies.ed.gov/ncee/rel/regions/southeast/pdf/prefix_base_word_suffix.pdf)
- [Migrating from GitHub to jsDelivr](https://www.jsdelivr.com/github)