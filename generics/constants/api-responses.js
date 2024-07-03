/**
 * name : api-responses.js
 * author : Aman Karki
 * Date : 13-July-2020
 * Description : All api response messages.
 */

module.exports = {
	PROJECT_CATEGORIES_FETCHED: 'Project categories fetched successfully',
	URL_COULD_NOT_BE_FOUND: 'Could not found url from gcp',
	PROJECTS_FETCHED: 'Project lists fetched successfully',
	PROJECT_TEMPLATES_CSV: 'Missing file of type projectTemplates',
	PROJECT_TEMPLATE_EXISTS: 'Project template already exists',
	PROJECT_TEMPLATE_NOT_FOUND: 'Project template not found',
	MISSING_PROJECT_TEMPLATE_ID: 'Missing project template id',
	PROJECT_TEMPLATES_TASKS_CSV: 'Missing file of type projectTemplateTasks',
	REQUIRED_SOLUTION_TYPE: 'Required solution type',
	REQUIRED_SOLUTION_SUB_TYPE: 'Required solution sub type',
	SOLUTION_NOT_FOUND: 'No solution found',
	REQUIRED_SOLUTION_ID: 'Required Solution id',
	REQUIRED_CONTENT_ID: 'Required content id',
	REQUIRED_CONTENT_TYPE: 'Required content type',
	REQUIRED_IMPROVEMENT_PROJECT_ID: 'Required improvement project id',
	PROJECT_TEMPLATE_TASKS_NOT_CREATED: 'Could not create project templates task',
	PROJECT_TEMPLATES_NOT_CREATED: 'Could not create project templates',
	DUPLICATE_PROJECT_TEMPLATES_CREATED: 'Successfully created duplicate project templates',
	INVALID_TASK_ID: 'Invalid project template task id',
	PROJECT_NOT_FOUND: 'No project found',
	PROJECT_TEMPLATE_TASK_EXISTS: 'Project template tasks already exists',
	SUCCESS: 'Success',
	TOKEN_MISSING_CODE: 'ERR_TOKEN_FIELD_MISSING',
	TOKEN_MISSING_MESSAGE: 'Required field token is missing',
	TOKEN_INVALID_CODE: 'ERR_TOKEN_INVALID',
	TOKEN_INVALID_MESSAGE: 'Access denied',
	MISSING_TOKEN_AND_INTERNAL_ACCESS_TOKEN_CODE: 'ERR_REQUEST_FIELDS_MISSING',
	MISSING_TOKEN_AND_INTERNAL_ACCESS_TOKEN_MESSAGE: 'Token and Internal access token both are required field',
	MISSING_TOKEN_OR_INTERNAL_ACCESS_TOKEN_CODE: 'ERR_REQUEST_ANY_ONE_FIELD_MISSING',
	MISSING_TOKEN_OR_INTERNAL_ACCESS_TOKEN_MESSAGE: 'Token or Internal access token either one is required',
	SUNBIRD_SERVICE_DOWN: 'Sunbird service is down',
	PROJECTS_FETCHED: 'Successfully fetched projects',
	SAMIKSHA_SERVICE_DOWN: 'Samiksha service is down',
	USER_ROLES_NOT_FOUND: 'No user roles found',
	ENTITY_TYPES_NOT_FOUND: 'No entity type found',
	PROJECTS_METAFORM_FETCHED: 'Successfully fetched projects metaform',
	PROJECTS_FORM_NOT_FOUND: 'No projects form found',
	PROJECT_TASKS_FORM_NOT_FOUND: 'No project tasks form found',
	PROJECT_TASKS_METAFORM_FETCHED: 'Successfully fetched projects tasks metaform',
	PROJECT_CREATED: 'Project created successfully',
	PROJECTS_CSV_REQUIRED: 'Required projects csv file',
	PROGRAM_NOT_FOUND: 'No program found',
	COULD_NOT_PUSHED_TO_KAFKA: 'Could not pushed to kafka',
	PROJECT_ALREADY_SYNED: 'Project is already synced for current user',
	SOLUTION_PROGRAMS_NOT_CREATED: 'Could not create solution and program',
	CREATED_USER_PROJECT: 'Created user project successfully',
	USER_PROJECT_NOT_FOUND: 'Could not found user project',
	USER_PROJECT_UPDATED: 'Updated user project successfully',
	USER_PROJECT_NOT_UPDATED: 'Could not updated user project',
	PROJECT_DETAILS_FETCHED: 'Successfully fetched project details',
	REPORTS_GENERATED: 'Reports generated successfully.',
	REPORTS_DATA_NOT_FOUND: 'Reports data not found',
	PROGRAMS_FOUND: 'Programs fetched successfully',
	PROGRAMS_NOT_FOUND: 'Programs not found',
	ENTITIES_FOUND: 'Entities fetched successfully',
	ENTITIES_NOT_FOUND: 'Entities not found',
	ENTITY_TYPES_FOUND: 'Entity types fetched successfully.',
	REPORT_TYPES_FOUND: 'Report types fetched successfully.',
	REPORT_GENERATED: 'Chart report data generated succesfully.',
	PRESSIGNED_URLS_GENERATED: 'File upload urls generated successfully.',
	FAILED_TO_GENERATE_PRESSIGNED_URLS: 'Failed to generate file upload urls.',
	TASKS_STATUS_FETCHED: 'Tasks status fetched successfully',
	INVALID_OBSERVATION_ID: 'Invalid observation id',
	PROJECT_TEMPLATE_TASKS_NOT_FOUND: 'Could not found project template tasks',
	LIBRARY_CATEGORIES_NOT_FOUND: 'Could not found library categories',
	SOLUTION_DETAILS_FETCHED: 'Solutions details fetched successfully',
	KENDRA_URL_NOT_FETCHED: 'Could not fetch url from kendra service',
	USER_PROFILE_NOT_FOUND: 'Not found user profile',
	OBSERVATION_NOT_FOUND: 'No observation found',
	USER_ORGANISATION_NOT_FOUND: 'User organisation details not found',
	CATEGORY_NOT_FOUND: 'Not found category',
	ENTITY_NOT_FOUND: 'No entity found',
	ATTACHMENTS_URL_NOT_FOUND: 'Not found attachments url',
	PROJECT_CATEGORIES_UPDATED: 'Successfully updated project categories',
	PROJECT_CATEGORIES_ADDED: 'Successfully created project categories',
	PROJECT_CATEGORIES_NOT_UPDATED: 'Could not updated project categories',
	PROJECT_CATEGORIES_NOT_ADDED: 'Could not create project categories',
	PROJECT_TEMPLATE_NOT_UPDATED: 'Not found project template',
	COULD_NOT_CREATE_ASSESSMENT_SOLUTION: 'Could not create assessment solution',
	FAILED_TO_ADD_ENTITY_TO_SOLUTION: 'Failed to add entity to solution',
	FAILED_TO_ASSIGNED_ASSESSMENT_TO_USER: 'Failed to assign assessment to user',
	SOLUTION_NOT_UPDATED: 'Could not update solution',
	OBSERVATION_NOT_CREATED: 'Could not create observation',
	USERS_AND_ENTITIES_NOT_FOUND: 'Could not find users for the given entity and role',
	PROGRAM_NOT_UPDATED: 'Could not update program',
	ENTITY_NOT_UPDATED: 'Could not update entity',
	UPDATE_QUERY_REQUIRED: 'Update query is required',
	UPDATE_OBJECT_REQUIRED: 'Update object is required',
	FAILED_TO_UPDATE: 'Failed to update the document',
	UPDATED_DOCUMENT_SUCCESSFULLY: 'Document updated successfully',
	ENTITY_REQUIRED_FOR_ASSESSMENT_OBSERVATION: 'Entity is required for assessment or observation task',
	PROJECT_NOT_CREATED: 'Could not create project',
	USER_ALREADY_SYNC: 'User is already synced',
	IMPROVEMENT_PROJECT_SOLUTION_NOT_FOUND: 'Solution should be of type improvement project',
	SOLUTION_TYPE_MIS_MATCH: 'Not matched solution type',
	SOLUTION_SUB_TYPE_MIS_MATCH: 'Not matched solution sub type',
	ENTITY_TYPE_NOT_FOUND_IN_TEMPLATE: 'Not found entity type in template',
	MIS_MATCHED_PROJECT_AND_TASK_ENTITY_TYPE: 'Project and task entity type mis matched',
	ENTITY_TYPE_MIS_MATCHED: 'Entity type does not match template entity type',
	TARGETED_PROJECT_FETCHED: ' Targeted projects fetched successfully',
	SOLUTION_DOES_NOT_EXISTS_IN_SCOPE: 'Solution does not exists in scope',
	IMPROVEMENT_PROJECT_SOLUTION_CREATED: 'Improvement project solution created successfully',
	IMPROVEMENT_PROJECT_SOLUTION_NOT_CREATED: 'Improvement project solution could not be created',
	PROJECT_TEMPLATES_FETCHED: 'List of project templates fetched successfully',
	PROJECT_CREATED: 'Project created successfully',
	USER_PROJECT_NOT_CREATED: 'Could not created user project',
	REPORT_GENERATED_SUCCESSFULLY: 'Report generated succesfully',
	USER_ASSIGNED_PROJECT_FETCHED: 'User project fetched successfully',
	COULD_NOT_GENERATE_PDF_REPORT: 'Could not generate pdf report',
	PROJECT_TEMPLATE_DETAILS_FETCHED: 'Successfully fetched project template details',
	PROJECT_TEMPLATE_EXISTS_IN_SOLUTION: 'Project templates already exists in solution',
	IMPORTED_PROJECTS_FETCHED: 'List of imported projects fetched',
	MIN_NO_OF_SUBMISSION_REQUIRED_MIS_MATCHED:
		'minNoOfSubmissionsRequired should be 1 because allowMultipleAssessemts is false',
	TASKS_MARKED_AS_ISDELETABLE_FALSE: 'Successfully updated the tasks',
	TEMPLATE_TASK_NOT_UPDATED: 'Could not updated template task',
	PROJECT_TEMPLATE_UPDATED: 'Successfully updated project template',
	PROJECT_TEMPLATE_TASK_UPDATED: 'Successfully updated project template task',
	TEMPLATE_ID_OR_LINK_REQUIRED: 'TemplateId or Link either one is required',
	TEMPLATE_ID_NOT_FOUND_IN_SOLUTION: 'Could not found templateId in solution',
	FAILED_TO_SYNC_PROJECT_ALREADY_SUBMITTED: 'Failed to sync, Project is already Submitted',
	SOLUTION_ID_AND_USERPROFILE_REQUIRED: 'Required solution Id and userProfile',
	PROJECT_WITH_CERTIFICATE_NOT_FOUND: 'No certification project found for user',
	PROJECT_CERTIFICATE_GENERATED: 'Successfully generated project certificate',
	TRANSACTION_ID_AND_OSID_REQUIRED: 'Required transactionId and osid',
	PROJECT_CERTIFICATE_GENERATED_ONCE: 'Certificate generated once',
	DOWNLOADABLE_URL_NOT_FOUND: 'Failed to generate downloadable URL',
	CERTIFICATE_TEMPLATE_NOT_FOUND: 'Certificate template details not found',
	CERTIFICATE_GENERATION_FAILED: 'Certificate generation failed',
	NOT_ELIGIBLE_FOR_CERTIFICATE: 'Project is not eligible for certificate',
	ISSUER_KID_NOT_FOUND: 'Failed to fetch certificate issuer kid',
	PROJECT_SUBMITTED_FOR_REISSUE: 'Submitted for project certificate reIssue',
	PROGRAM_JOIN_FAILED: 'Failed to join program',
	DOWNLOADABLE_URL_GENERATED: 'Downloadable Url generated',
	PROGRAM_NOT_CREATED: 'Program not created',
	PROGRAMS_CREATED: 'Programs created successfully',
	PROGRAMS_UPDATED: 'Programs updated successfully',
	PROGRAMS_FETCHED: 'Programs fetched successfully',
	COURSE_LINK_REQUIRED: 'Course link is required',
	SOLUTION_NOT_CREATED: 'Solution not created',
	SOLUTION_CREATED: 'Solution created successfully',
	SOLUTION_UPDATED: 'Solution updated successfully',
	SOLUTIONS_LIST: 'Solutions lists fetched successfully',
	KEYS_INDEXED_SUCCESSFULL: 'Keys indexed successfully',
	KEYS_ALREADY_INDEXED_SUCCESSFULL: 'Keys already indexed',
	SOLUTION_SCOPE_NOT_ADDED: 'Could not add solution scope',
	PROGRAM_SCOPE_NOT_ADDED: 'Could not add program scope',
	PROGRAM_UPDATED: 'Program updated successfully',
	INVALID_ROLE_CODE: 'Invalid role in code',
	ROLES_ADDED_IN_PROGRAM: 'Successfully added roles in program scope',
	ENTITIES_ADDED_IN_PROGRAM: 'Successfully added entities in program scope',
	ROLES_REMOVED_IN_PROGRAM: 'Successfully removed roles in program scope',
	ENTITIES_REMOVED_IN_PROGRAM: 'Successfully removed entities in program scope',
	ROLES_ADDED_IN_SOLUTION: 'Successfully added roles in solution scope',
	NO_LOCATION_ID_FOUND_IN_DATA: 'Location Id not found in data',
	SOLUTION_NOT_FOUND_OR_NOT_A_TARGETED: 'Solution is not targeted to the role',
	SOLUTION_DETAILS_VERIFIED: 'Solution verified successfully',
	TARGETED_SOLUTIONS_FETCHED: 'Successfully targeted solutions fetched',
	FAILED_TO_START_RESOURCE: 'There was an error in starting/joining. Please try again after some time.',
	ENTITY_FETCHED: 'Entities fetched successfully',
	SCOPE_NOT_UPDATED_IN_PROGRAM: 'Scope is not updated in program',
	USER_PROGRAM_AND_SOLUTION_CREATED: 'User program and solution created successfully',
	ROLES_REMOVED_IN_SOLUTION: 'Successfully removed roles in solution scope',
	COULD_NOT_UPDATE_SCOPE: 'Could not update scope in solution',
	LINK_GENERATED: 'Link generated successfully',
	REQUIRED_USER_AUTH_TOKEN: 'User auth token is required',
	USER_ID_REQUIRED_CHECK: 'UserId is required',
	INVALID_LINK: 'The Link is not valid',
	LINK_IS_EXPIRED: 'Link is expired',
	JOINED_PROGRAM: 'You have joined this program successfully',
	ENTITY_NOT_EXISTS_IN_PARENT: 'Entity could not found in parent entities',
	ENTITIES_ADDED_IN_SOLUTION: 'Successfully added entities in solution scope',
	ENTITIES_REMOVED_IN_SOLUTION: 'Successfully removed entities from solution scope',
	PROGRAM_UPDATED_SUCCESSFULLY: 'Program updated successfully',
	ENTITIES_FETCHED: 'Entities fetched successfully',
	USER_ASSIGNED_OBSERVATION_FETCHED: 'List of user assigned observations',
	USER_ASSIGNED_SURVEY_FETCHED: 'List of user assigned surveys',
	SURVEYS_FETCHED: 'Surveys fetched successfully',
	TARGETED_OBSERVATION_FETCHED: 'Targeted observations fetched successfully',
	PROGRAM_LIST: 'Program lists fetched successfully',
	CLOUD_SERVICE_SUCCESS_MESSAGE: "Url's generated successfully",
	URL_GENERATED: 'Url generated successfully',
	FAILED_PRE_SIGNED_URL: 'Failed to generate signed url',
	FAILED_TO_UPLOAD: 'Failed to upload file',
	FAILED_TO_CREATE_DOWNLOADABLEURL: 'Failed to generate downloadableUrl',
	FORM_CREATED_SUCCESSFULLY: 'Form created successfully',
	FORM_NOT_CREATED: 'Form creation failed',
	DEFAULT_ORG_ID_NOT_SET: 'Default orgId not set',
	FORM_NOT_FOUND: 'Form not found',
	FORM_FETCHED_SUCCESSFULLY: 'Form fetched successfully',
	FORM_VERSION_NOT_FETCHED: 'Forms version not able to fetch',
	FORM_VERSION_FETCHED_SUCCESSFULLY: 'Forms version fetched successfully',
	FORM_UPDATED_SUCCESSFULLY: 'Form updated successfully',
	FORM_NOT_UPDATED: 'Form updation failed',
	DATA_FETCHED_SUCCESSFULLY: 'Data fetched successfully',
	COULD_NOT_UPLOAD_CONTENT: 'Could not upload content',
	CERTIFICATE_BASE_TEMPLATE_ADDED: 'Certificate base template added',
	CERTIFICATE_BASE_TEMPLATE_NOT_UPDATED: 'Base template updation failed',
	CERTIFICATE_BASE_TEMPLATE_UPDATED: 'Base template updated successfully',
	CERTIFICATE_TEMPLATE_ADDED: 'Template added successfully',
	CERTIFICATE_TEMPLATE_NOT_UPDATED: 'Template updation failed',
	CERTIFICATE_TEMPLATE_UPDATED: 'Template updated successfully',
	BASE_CERTIFICATE_TEMPLATE_NOT_FOUND: 'Base certificate template not found',
	FILE_UPLOADED: 'File successfully uploaded to cloud',
	PROJECT_TEMPLATE_ID_NOT_FOUND: 'Project tempalteId not found',
	SOLUTION_TYPE_INVALID: 'Invalid solution type',
	INPUT_IS_NOT_A_VALID_ARRAY: 'Input is not a valid array',
	USER_DATA_FETCH_UNSUCCESSFUL: 'User data fetch unsuccessful',
}
