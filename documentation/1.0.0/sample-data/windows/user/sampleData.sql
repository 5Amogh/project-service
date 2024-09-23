INSERT INTO public.users (id, name, email, email_verified, roles, status, password, organization_id, has_accepted_terms_and_conditions, about, location, languages, preferred_language, share_link, image, custom_entity_text, meta, created_at, updated_at, deleted_at) VALUES (1, 'Aarav Patel', '8d1f1e11989cf7b739c9daa972c56c5083b46d490f8023a67eb89d28a2b615ef', false, '{5}', 'ACTIVE', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, true, NULL, NULL, NULL, 'en', NULL, NULL, NULL, NULL, '2024-04-18 08:12:19.394+00', '2024-04-18 08:12:19.426+00', NULL);
INSERT INTO public.users (id, name, email, email_verified, roles, status, password, organization_id, has_accepted_terms_and_conditions, about, location, languages, preferred_language, share_link, image, custom_entity_text, meta, created_at, updated_at, deleted_at) VALUES (2, 'Arunima Reddy', '0f34042735bb359f1c227b4497cf5074b372085830eef69db07dd80789c25dd5', false, '{4}', 'ACTIVE', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, true, NULL, NULL, NULL, 'en', NULL, NULL, NULL, NULL, '2024-04-18 08:12:19.394+00', '2024-04-18 08:12:19.426+00', NULL);
INSERT INTO public.users (id, name, email, email_verified, roles, status, password, organization_id, has_accepted_terms_and_conditions, about, location, languages, preferred_language, share_link, image, custom_entity_text, meta, created_at, updated_at, deleted_at) VALUES (3, 'Devika Singh', '1e8828f2f98d16ff63a424620f9d582a1de88268414606a0593c73eb5316543c', false, '{7}', 'ACTIVE', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, true, NULL, NULL, NULL, 'en', NULL, NULL, NULL, NULL, '2024-04-18 08:12:19.394+00', '2024-04-18 08:12:19.426+00', NULL);
INSERT INTO public.users_credentials (id, email, password, organization_id, user_id, meta, created_at, updated_at, deleted_at, organization_user_invite_id) VALUES (1, '8d1f1e11989cf7b739c9daa972c56c5083b46d490f8023a67eb89d28a2b615ef', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, 1, NULL, '2024-04-18 08:12:19.407+00', '2024-04-18 08:12:19.407+00', NULL, NULL);
INSERT INTO public.users_credentials (id, email, password, organization_id, user_id, meta, created_at, updated_at, deleted_at, organization_user_invite_id) VALUES (2, '0f34042735bb359f1c227b4497cf5074b372085830eef69db07dd80789c25dd5', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, 2, NULL, '2024-04-18 08:12:19.407+00', '2024-04-18 08:12:19.407+00', NULL, NULL);
INSERT INTO public.users_credentials (id, email, password, organization_id, user_id, meta, created_at, updated_at, deleted_at, organization_user_invite_id) VALUES (3, '1e8828f2f98d16ff63a424620f9d582a1de88268414606a0593c73eb5316543c', '$2a$10$NTzc2CjEbwB4DavjEKU11eqJXJLrODnvAwvXWor9Dz/gXr55Pvyj.', 1, 3, NULL, '2024-04-18 08:12:19.407+00', '2024-04-18 08:12:19.407+00', NULL, NULL);
SELECT nextval('users_id_seq'::regclass) FROM public.users;
SELECT nextval('users_credentials_id_seq'::regclass) FROM public.users_credentials;
SELECT NULL;