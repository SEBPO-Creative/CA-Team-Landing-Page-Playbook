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
- **Developers**: Responsible for implementing the landing page according to the approved design and requirements.
- **QA Engineers**: Responsible for testing the landing page and reporting any defects or issues.
- **Developers**: Responsible for deploying the landing page to the production environment.
- **Team Leader**: Responsible for overseeing the entire process and ensuring that the landing page meets the client's requirements and is delivered on time.

## Framework: 
- Each landing page should be developed using the CitrusStylesSE library or framework [CitrusStylesSE](https://ca-team-landing-page-playbook.pages.dev/CitrusStylesSE.css)
- The CitrusStylesSE library or framework is developed by adapting the [Blaze UI](https://www.blazeui.com/) library by replacing the prefix `CitrusStylesSE-` with `o-`, `c-` and `u-`.
- Production must exclusively utilize CSS and js frameworks from CDN:
  - [CitrusStylesSE.css CDN](https://ca-team-landing-page-playbook.pages.dev/CitrusStylesSE.css)
  - [CitrusStylesSE.js CDN](https://ca-team-landing-page-playbook.pages.dev/CitrusStylesSE.js)
- Inline styles and multiple external CSS files are prohibited.

## Naming Convention:
- Utilize BEM methodologies and SMACSS architecture for CSS organization.
- Prefix all classes, IDs, functions, variables, etc., with "citrusStylesSE" to prevent conflicts.

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
- Validate HTML structure with W3C Markup Validator.
- Verify semantic elements.
- Check accessibility attributes.
- Confirm proper heading hierarchy.
- Analyze meta tags.
- Check for broken links.
- Test responsive design.

**CSS**
- Validate CSS syntax.
- Verify consistent styling.
- Check for unused CSS selectors.
- Test CSS media queries.
- Analyze CSS performance.
- Check for inline styles.
- Review CSS comments.

**JavaScript**
- Validate JavaScript syntax.
- Verify functionality.
- Check for conflicts.
- Test event listeners.
- Analyze JavaScript performance.
- Review JavaScript comments.
- Test browser compatibility.

## Testing:
**QA Reviewer**
- Perform thorough testing, including validation, functionality, performance, security, and user acceptance testing.
- Document all defects and issues found.

**Developers**
- Fix reported issues and update the landing page.
- Retest the updated landing page.
- Passing QA checklist is mandatory for each landing page during every testing phase.

## Post-Deployment Activities:
**Pre-Deployment Checks**
- Perform final code review and testing in a staging environment in GitHub.
- Obtain necessary approvals for deployment.

**Deployment Process**
- Prepare landing page handoff files and upload to the designated server location.
- Configure server settings (e.g., redirects, caching).
- Thoroughly test the deployed landing page in live and staging environments.

**Post-Deployment Monitoring**
- Monitor landing page performance.
- Address issues promptly.
- Provide training and support to the client.
- Continuously monitor landing page security.

**Deployment**
- Once the landing page passes all testing phases, deploy to the production environment.
- Developer handles the deployment process.

## Documentation:
- Maintain accurate and up-to-date documentation.
- Document lessons learned or challenges faced.
- Use documentation for continuous improvement.

## Version Control:
- Use SEBPO Github Repository for all code changes.
- Use pull requests for changes.
- Follow "one commit, one change" rule.
- Keep branches organized.
- Merge into development regularly.
- Use descriptive commit messages.
- Use labels and milestones.
- Keep the repository clean.
- Follow coding style guide.
- Use GitFlow.
- Regularly back up the repository.
- Enable two-factor authentication.
- Limit collaborator permissions.
- Use protected branches.
- Enable branch restrictions.
- Use GitHub's built-in code review tool.

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
