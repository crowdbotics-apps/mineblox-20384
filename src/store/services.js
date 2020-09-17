import axios from "axios"
const minebloxAPI = axios.create({
  baseURL: "https://mineblox-20384-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_contact_list() {
  return minebloxAPI.get(`/api/v1/contact/`)
}
function api_v1_contact_create(requestBody) {
  return minebloxAPI.post(`/api/v1/contact/`, requestBody)
}
function api_v1_contact_read() {
  return minebloxAPI.get(`/api/v1/contact/{id}/`)
}
function api_v1_contact_update(requestBody) {
  return minebloxAPI.put(`/api/v1/contact/{id}/`, requestBody)
}
function api_v1_contact_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/contact/{id}/`, requestBody)
}
function api_v1_contact_delete() {
  return minebloxAPI.delete(`/api/v1/contact/{id}/`)
}
function api_v1_customtext_list() {
  return minebloxAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return minebloxAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return minebloxAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_forwardedmessage_list() {
  return minebloxAPI.get(`/api/v1/forwardedmessage/`)
}
function api_v1_forwardedmessage_create(requestBody) {
  return minebloxAPI.post(`/api/v1/forwardedmessage/`, requestBody)
}
function api_v1_forwardedmessage_read() {
  return minebloxAPI.get(`/api/v1/forwardedmessage/{id}/`)
}
function api_v1_forwardedmessage_update(requestBody) {
  return minebloxAPI.put(`/api/v1/forwardedmessage/{id}/`, requestBody)
}
function api_v1_forwardedmessage_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/forwardedmessage/{id}/`, requestBody)
}
function api_v1_forwardedmessage_delete() {
  return minebloxAPI.delete(`/api/v1/forwardedmessage/{id}/`)
}
function api_v1_homepage_list() {
  return minebloxAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return minebloxAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return minebloxAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return minebloxAPI.post(`/api/v1/login/`)
}
function api_v1_message_list() {
  return minebloxAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(requestBody) {
  return minebloxAPI.post(`/api/v1/message/`, requestBody)
}
function api_v1_message_read() {
  return minebloxAPI.get(`/api/v1/message/{id}/`)
}
function api_v1_message_update(requestBody) {
  return minebloxAPI.put(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_delete() {
  return minebloxAPI.delete(`/api/v1/message/{id}/`)
}
function api_v1_messageaction_list() {
  return minebloxAPI.get(`/api/v1/messageaction/`)
}
function api_v1_messageaction_create(requestBody) {
  return minebloxAPI.post(`/api/v1/messageaction/`, requestBody)
}
function api_v1_messageaction_read() {
  return minebloxAPI.get(`/api/v1/messageaction/{id}/`)
}
function api_v1_messageaction_update(requestBody) {
  return minebloxAPI.put(`/api/v1/messageaction/{id}/`, requestBody)
}
function api_v1_messageaction_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/messageaction/{id}/`, requestBody)
}
function api_v1_messageaction_delete() {
  return minebloxAPI.delete(`/api/v1/messageaction/{id}/`)
}
function api_v1_profile_list() {
  return minebloxAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(requestBody) {
  return minebloxAPI.post(`/api/v1/profile/`, requestBody)
}
function api_v1_profile_read() {
  return minebloxAPI.get(`/api/v1/profile/{id}/`)
}
function api_v1_profile_update(requestBody) {
  return minebloxAPI.put(`/api/v1/profile/{id}/`, requestBody)
}
function api_v1_profile_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/profile/{id}/`, requestBody)
}
function api_v1_profile_delete() {
  return minebloxAPI.delete(`/api/v1/profile/{id}/`)
}
function api_v1_signup_create(requestBody) {
  return minebloxAPI.post(`/api/v1/signup/`, requestBody)
}
function api_v1_thread_list() {
  return minebloxAPI.get(`/api/v1/thread/`)
}
function api_v1_thread_create(requestBody) {
  return minebloxAPI.post(`/api/v1/thread/`, requestBody)
}
function api_v1_thread_read() {
  return minebloxAPI.get(`/api/v1/thread/{id}/`)
}
function api_v1_thread_update(requestBody) {
  return minebloxAPI.put(`/api/v1/thread/{id}/`, requestBody)
}
function api_v1_thread_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/thread/{id}/`, requestBody)
}
function api_v1_thread_delete() {
  return minebloxAPI.delete(`/api/v1/thread/{id}/`)
}
function api_v1_threadaction_list() {
  return minebloxAPI.get(`/api/v1/threadaction/`)
}
function api_v1_threadaction_create(requestBody) {
  return minebloxAPI.post(`/api/v1/threadaction/`, requestBody)
}
function api_v1_threadaction_read() {
  return minebloxAPI.get(`/api/v1/threadaction/{id}/`)
}
function api_v1_threadaction_update(requestBody) {
  return minebloxAPI.put(`/api/v1/threadaction/{id}/`, requestBody)
}
function api_v1_threadaction_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/threadaction/{id}/`, requestBody)
}
function api_v1_threadaction_delete() {
  return minebloxAPI.delete(`/api/v1/threadaction/{id}/`)
}
function api_v1_threadmember_list() {
  return minebloxAPI.get(`/api/v1/threadmember/`)
}
function api_v1_threadmember_create(requestBody) {
  return minebloxAPI.post(`/api/v1/threadmember/`, requestBody)
}
function api_v1_threadmember_read() {
  return minebloxAPI.get(`/api/v1/threadmember/{id}/`)
}
function api_v1_threadmember_update(requestBody) {
  return minebloxAPI.put(`/api/v1/threadmember/{id}/`, requestBody)
}
function api_v1_threadmember_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/threadmember/{id}/`, requestBody)
}
function api_v1_threadmember_delete() {
  return minebloxAPI.delete(`/api/v1/threadmember/{id}/`)
}
function api_v1_user_list() {
  return minebloxAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(requestBody) {
  return minebloxAPI.post(`/api/v1/user/`, requestBody)
}
function api_v1_user_read() {
  return minebloxAPI.get(`/api/v1/user/{id}/`)
}
function api_v1_user_update(requestBody) {
  return minebloxAPI.put(`/api/v1/user/{id}/`, requestBody)
}
function api_v1_user_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/user/{id}/`, requestBody)
}
function api_v1_user_delete() {
  return minebloxAPI.delete(`/api/v1/user/{id}/`)
}
function api_v1_verificationcode_list() {
  return minebloxAPI.get(`/api/v1/verificationcode/`)
}
function api_v1_verificationcode_create(requestBody) {
  return minebloxAPI.post(`/api/v1/verificationcode/`, requestBody)
}
function api_v1_verificationcode_read() {
  return minebloxAPI.get(`/api/v1/verificationcode/{id}/`)
}
function api_v1_verificationcode_update(requestBody) {
  return minebloxAPI.put(`/api/v1/verificationcode/{id}/`, requestBody)
}
function api_v1_verificationcode_partial_update(requestBody) {
  return minebloxAPI.patch(`/api/v1/verificationcode/{id}/`, requestBody)
}
function api_v1_verificationcode_delete() {
  return minebloxAPI.delete(`/api/v1/verificationcode/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return minebloxAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return minebloxAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return minebloxAPI.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return minebloxAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return minebloxAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return minebloxAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_contact_list,
  api_v1_contact_create,
  api_v1_contact_read,
  api_v1_contact_update,
  api_v1_contact_partial_update,
  api_v1_contact_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_forwardedmessage_list,
  api_v1_forwardedmessage_create,
  api_v1_forwardedmessage_read,
  api_v1_forwardedmessage_update,
  api_v1_forwardedmessage_partial_update,
  api_v1_forwardedmessage_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_messageaction_list,
  api_v1_messageaction_create,
  api_v1_messageaction_read,
  api_v1_messageaction_update,
  api_v1_messageaction_partial_update,
  api_v1_messageaction_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_signup_create,
  api_v1_thread_list,
  api_v1_thread_create,
  api_v1_thread_read,
  api_v1_thread_update,
  api_v1_thread_partial_update,
  api_v1_thread_delete,
  api_v1_threadaction_list,
  api_v1_threadaction_create,
  api_v1_threadaction_read,
  api_v1_threadaction_update,
  api_v1_threadaction_partial_update,
  api_v1_threadaction_delete,
  api_v1_threadmember_list,
  api_v1_threadmember_create,
  api_v1_threadmember_read,
  api_v1_threadmember_update,
  api_v1_threadmember_partial_update,
  api_v1_threadmember_delete,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete,
  api_v1_verificationcode_list,
  api_v1_verificationcode_create,
  api_v1_verificationcode_read,
  api_v1_verificationcode_update,
  api_v1_verificationcode_partial_update,
  api_v1_verificationcode_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
