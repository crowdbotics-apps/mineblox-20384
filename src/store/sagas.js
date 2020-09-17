import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_contact_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_list, action)
    yield put(actions.api_v1_contact_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_listFailed(err))
  }
}
function* api_v1_contact_listWatcher() {
  yield takeEvery(types.API_V1_CONTACT_LIST, api_v1_contact_listWorker)
}
function* api_v1_contact_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_create, action)
    yield put(actions.api_v1_contact_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_createFailed(err))
  }
}
function* api_v1_contact_createWatcher() {
  yield takeEvery(types.API_V1_CONTACT_CREATE, api_v1_contact_createWorker)
}
function* api_v1_contact_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_read, action)
    yield put(actions.api_v1_contact_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_readFailed(err))
  }
}
function* api_v1_contact_readWatcher() {
  yield takeEvery(types.API_V1_CONTACT_READ, api_v1_contact_readWorker)
}
function* api_v1_contact_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_update, action)
    yield put(actions.api_v1_contact_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_updateFailed(err))
  }
}
function* api_v1_contact_updateWatcher() {
  yield takeEvery(types.API_V1_CONTACT_UPDATE, api_v1_contact_updateWorker)
}
function* api_v1_contact_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_partial_update, action)
    yield put(actions.api_v1_contact_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_partial_updateFailed(err))
  }
}
function* api_v1_contact_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CONTACT_PARTIAL_UPDATE,
    api_v1_contact_partial_updateWorker
  )
}
function* api_v1_contact_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contact_delete, action)
    yield put(actions.api_v1_contact_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_contact_deleteFailed(err))
  }
}
function* api_v1_contact_deleteWatcher() {
  yield takeEvery(types.API_V1_CONTACT_DELETE, api_v1_contact_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_forwardedmessage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_forwardedmessage_list, action)
    yield put(actions.api_v1_forwardedmessage_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_listFailed(err))
  }
}
function* api_v1_forwardedmessage_listWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_LIST,
    api_v1_forwardedmessage_listWorker
  )
}
function* api_v1_forwardedmessage_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_forwardedmessage_create, action)
    yield put(actions.api_v1_forwardedmessage_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_createFailed(err))
  }
}
function* api_v1_forwardedmessage_createWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_CREATE,
    api_v1_forwardedmessage_createWorker
  )
}
function* api_v1_forwardedmessage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_forwardedmessage_read, action)
    yield put(actions.api_v1_forwardedmessage_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_readFailed(err))
  }
}
function* api_v1_forwardedmessage_readWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_READ,
    api_v1_forwardedmessage_readWorker
  )
}
function* api_v1_forwardedmessage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_forwardedmessage_update, action)
    yield put(actions.api_v1_forwardedmessage_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_updateFailed(err))
  }
}
function* api_v1_forwardedmessage_updateWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_UPDATE,
    api_v1_forwardedmessage_updateWorker
  )
}
function* api_v1_forwardedmessage_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_forwardedmessage_partial_update,
      action
    )
    yield put(actions.api_v1_forwardedmessage_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_partial_updateFailed(err))
  }
}
function* api_v1_forwardedmessage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE,
    api_v1_forwardedmessage_partial_updateWorker
  )
}
function* api_v1_forwardedmessage_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_forwardedmessage_delete, action)
    yield put(actions.api_v1_forwardedmessage_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_forwardedmessage_deleteFailed(err))
  }
}
function* api_v1_forwardedmessage_deleteWatcher() {
  yield takeEvery(
    types.API_V1_FORWARDEDMESSAGE_DELETE,
    api_v1_forwardedmessage_deleteWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_message_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_list, action)
    yield put(actions.api_v1_message_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_listFailed(err))
  }
}
function* api_v1_message_listWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_LIST, api_v1_message_listWorker)
}
function* api_v1_message_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_create, action)
    yield put(actions.api_v1_message_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_createFailed(err))
  }
}
function* api_v1_message_createWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_CREATE, api_v1_message_createWorker)
}
function* api_v1_message_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_read, action)
    yield put(actions.api_v1_message_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_readFailed(err))
  }
}
function* api_v1_message_readWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_READ, api_v1_message_readWorker)
}
function* api_v1_message_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_update, action)
    yield put(actions.api_v1_message_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_updateFailed(err))
  }
}
function* api_v1_message_updateWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_UPDATE, api_v1_message_updateWorker)
}
function* api_v1_message_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_partial_update, action)
    yield put(actions.api_v1_message_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_partial_updateFailed(err))
  }
}
function* api_v1_message_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGE_PARTIAL_UPDATE,
    api_v1_message_partial_updateWorker
  )
}
function* api_v1_message_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_delete, action)
    yield put(actions.api_v1_message_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_deleteFailed(err))
  }
}
function* api_v1_message_deleteWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_DELETE, api_v1_message_deleteWorker)
}
function* api_v1_messageaction_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_messageaction_list, action)
    yield put(actions.api_v1_messageaction_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_listFailed(err))
  }
}
function* api_v1_messageaction_listWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_LIST,
    api_v1_messageaction_listWorker
  )
}
function* api_v1_messageaction_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_messageaction_create, action)
    yield put(actions.api_v1_messageaction_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_createFailed(err))
  }
}
function* api_v1_messageaction_createWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_CREATE,
    api_v1_messageaction_createWorker
  )
}
function* api_v1_messageaction_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_messageaction_read, action)
    yield put(actions.api_v1_messageaction_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_readFailed(err))
  }
}
function* api_v1_messageaction_readWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_READ,
    api_v1_messageaction_readWorker
  )
}
function* api_v1_messageaction_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_messageaction_update, action)
    yield put(actions.api_v1_messageaction_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_updateFailed(err))
  }
}
function* api_v1_messageaction_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_UPDATE,
    api_v1_messageaction_updateWorker
  )
}
function* api_v1_messageaction_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_messageaction_partial_update,
      action
    )
    yield put(actions.api_v1_messageaction_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_partial_updateFailed(err))
  }
}
function* api_v1_messageaction_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_PARTIAL_UPDATE,
    api_v1_messageaction_partial_updateWorker
  )
}
function* api_v1_messageaction_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_messageaction_delete, action)
    yield put(actions.api_v1_messageaction_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_messageaction_deleteFailed(err))
  }
}
function* api_v1_messageaction_deleteWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGEACTION_DELETE,
    api_v1_messageaction_deleteWorker
  )
}
function* api_v1_profile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_list, action)
    yield put(actions.api_v1_profile_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_listFailed(err))
  }
}
function* api_v1_profile_listWatcher() {
  yield takeEvery(types.API_V1_PROFILE_LIST, api_v1_profile_listWorker)
}
function* api_v1_profile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_create, action)
    yield put(actions.api_v1_profile_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_createFailed(err))
  }
}
function* api_v1_profile_createWatcher() {
  yield takeEvery(types.API_V1_PROFILE_CREATE, api_v1_profile_createWorker)
}
function* api_v1_profile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_read, action)
    yield put(actions.api_v1_profile_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_readFailed(err))
  }
}
function* api_v1_profile_readWatcher() {
  yield takeEvery(types.API_V1_PROFILE_READ, api_v1_profile_readWorker)
}
function* api_v1_profile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_update, action)
    yield put(actions.api_v1_profile_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_updateFailed(err))
  }
}
function* api_v1_profile_updateWatcher() {
  yield takeEvery(types.API_V1_PROFILE_UPDATE, api_v1_profile_updateWorker)
}
function* api_v1_profile_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_partial_update, action)
    yield put(actions.api_v1_profile_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_partial_updateFailed(err))
  }
}
function* api_v1_profile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PROFILE_PARTIAL_UPDATE,
    api_v1_profile_partial_updateWorker
  )
}
function* api_v1_profile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_delete, action)
    yield put(actions.api_v1_profile_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_deleteFailed(err))
  }
}
function* api_v1_profile_deleteWatcher() {
  yield takeEvery(types.API_V1_PROFILE_DELETE, api_v1_profile_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_thread_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_list, action)
    yield put(actions.api_v1_thread_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_listFailed(err))
  }
}
function* api_v1_thread_listWatcher() {
  yield takeEvery(types.API_V1_THREAD_LIST, api_v1_thread_listWorker)
}
function* api_v1_thread_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_create, action)
    yield put(actions.api_v1_thread_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_createFailed(err))
  }
}
function* api_v1_thread_createWatcher() {
  yield takeEvery(types.API_V1_THREAD_CREATE, api_v1_thread_createWorker)
}
function* api_v1_thread_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_read, action)
    yield put(actions.api_v1_thread_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_readFailed(err))
  }
}
function* api_v1_thread_readWatcher() {
  yield takeEvery(types.API_V1_THREAD_READ, api_v1_thread_readWorker)
}
function* api_v1_thread_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_update, action)
    yield put(actions.api_v1_thread_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_updateFailed(err))
  }
}
function* api_v1_thread_updateWatcher() {
  yield takeEvery(types.API_V1_THREAD_UPDATE, api_v1_thread_updateWorker)
}
function* api_v1_thread_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_partial_update, action)
    yield put(actions.api_v1_thread_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_partial_updateFailed(err))
  }
}
function* api_v1_thread_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_THREAD_PARTIAL_UPDATE,
    api_v1_thread_partial_updateWorker
  )
}
function* api_v1_thread_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thread_delete, action)
    yield put(actions.api_v1_thread_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thread_deleteFailed(err))
  }
}
function* api_v1_thread_deleteWatcher() {
  yield takeEvery(types.API_V1_THREAD_DELETE, api_v1_thread_deleteWorker)
}
function* api_v1_threadaction_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadaction_list, action)
    yield put(actions.api_v1_threadaction_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_listFailed(err))
  }
}
function* api_v1_threadaction_listWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_LIST,
    api_v1_threadaction_listWorker
  )
}
function* api_v1_threadaction_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadaction_create, action)
    yield put(actions.api_v1_threadaction_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_createFailed(err))
  }
}
function* api_v1_threadaction_createWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_CREATE,
    api_v1_threadaction_createWorker
  )
}
function* api_v1_threadaction_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadaction_read, action)
    yield put(actions.api_v1_threadaction_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_readFailed(err))
  }
}
function* api_v1_threadaction_readWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_READ,
    api_v1_threadaction_readWorker
  )
}
function* api_v1_threadaction_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadaction_update, action)
    yield put(actions.api_v1_threadaction_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_updateFailed(err))
  }
}
function* api_v1_threadaction_updateWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_UPDATE,
    api_v1_threadaction_updateWorker
  )
}
function* api_v1_threadaction_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_threadaction_partial_update,
      action
    )
    yield put(actions.api_v1_threadaction_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_partial_updateFailed(err))
  }
}
function* api_v1_threadaction_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_PARTIAL_UPDATE,
    api_v1_threadaction_partial_updateWorker
  )
}
function* api_v1_threadaction_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadaction_delete, action)
    yield put(actions.api_v1_threadaction_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadaction_deleteFailed(err))
  }
}
function* api_v1_threadaction_deleteWatcher() {
  yield takeEvery(
    types.API_V1_THREADACTION_DELETE,
    api_v1_threadaction_deleteWorker
  )
}
function* api_v1_threadmember_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadmember_list, action)
    yield put(actions.api_v1_threadmember_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_listFailed(err))
  }
}
function* api_v1_threadmember_listWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_LIST,
    api_v1_threadmember_listWorker
  )
}
function* api_v1_threadmember_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadmember_create, action)
    yield put(actions.api_v1_threadmember_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_createFailed(err))
  }
}
function* api_v1_threadmember_createWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_CREATE,
    api_v1_threadmember_createWorker
  )
}
function* api_v1_threadmember_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadmember_read, action)
    yield put(actions.api_v1_threadmember_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_readFailed(err))
  }
}
function* api_v1_threadmember_readWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_READ,
    api_v1_threadmember_readWorker
  )
}
function* api_v1_threadmember_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadmember_update, action)
    yield put(actions.api_v1_threadmember_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_updateFailed(err))
  }
}
function* api_v1_threadmember_updateWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_UPDATE,
    api_v1_threadmember_updateWorker
  )
}
function* api_v1_threadmember_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_threadmember_partial_update,
      action
    )
    yield put(actions.api_v1_threadmember_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_partial_updateFailed(err))
  }
}
function* api_v1_threadmember_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_PARTIAL_UPDATE,
    api_v1_threadmember_partial_updateWorker
  )
}
function* api_v1_threadmember_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_threadmember_delete, action)
    yield put(actions.api_v1_threadmember_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_threadmember_deleteFailed(err))
  }
}
function* api_v1_threadmember_deleteWatcher() {
  yield takeEvery(
    types.API_V1_THREADMEMBER_DELETE,
    api_v1_threadmember_deleteWorker
  )
}
function* api_v1_user_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_list, action)
    yield put(actions.api_v1_user_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_listFailed(err))
  }
}
function* api_v1_user_listWatcher() {
  yield takeEvery(types.API_V1_USER_LIST, api_v1_user_listWorker)
}
function* api_v1_user_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_create, action)
    yield put(actions.api_v1_user_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_createFailed(err))
  }
}
function* api_v1_user_createWatcher() {
  yield takeEvery(types.API_V1_USER_CREATE, api_v1_user_createWorker)
}
function* api_v1_user_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_read, action)
    yield put(actions.api_v1_user_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_readFailed(err))
  }
}
function* api_v1_user_readWatcher() {
  yield takeEvery(types.API_V1_USER_READ, api_v1_user_readWorker)
}
function* api_v1_user_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_update, action)
    yield put(actions.api_v1_user_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_updateFailed(err))
  }
}
function* api_v1_user_updateWatcher() {
  yield takeEvery(types.API_V1_USER_UPDATE, api_v1_user_updateWorker)
}
function* api_v1_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_partial_update, action)
    yield put(actions.api_v1_user_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_partial_updateFailed(err))
  }
}
function* api_v1_user_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_USER_PARTIAL_UPDATE,
    api_v1_user_partial_updateWorker
  )
}
function* api_v1_user_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_user_delete, action)
    yield put(actions.api_v1_user_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_user_deleteFailed(err))
  }
}
function* api_v1_user_deleteWatcher() {
  yield takeEvery(types.API_V1_USER_DELETE, api_v1_user_deleteWorker)
}
function* api_v1_verificationcode_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_verificationcode_list, action)
    yield put(actions.api_v1_verificationcode_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_listFailed(err))
  }
}
function* api_v1_verificationcode_listWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_LIST,
    api_v1_verificationcode_listWorker
  )
}
function* api_v1_verificationcode_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_verificationcode_create, action)
    yield put(actions.api_v1_verificationcode_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_createFailed(err))
  }
}
function* api_v1_verificationcode_createWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_CREATE,
    api_v1_verificationcode_createWorker
  )
}
function* api_v1_verificationcode_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_verificationcode_read, action)
    yield put(actions.api_v1_verificationcode_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_readFailed(err))
  }
}
function* api_v1_verificationcode_readWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_READ,
    api_v1_verificationcode_readWorker
  )
}
function* api_v1_verificationcode_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_verificationcode_update, action)
    yield put(actions.api_v1_verificationcode_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_updateFailed(err))
  }
}
function* api_v1_verificationcode_updateWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_UPDATE,
    api_v1_verificationcode_updateWorker
  )
}
function* api_v1_verificationcode_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_verificationcode_partial_update,
      action
    )
    yield put(actions.api_v1_verificationcode_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_partial_updateFailed(err))
  }
}
function* api_v1_verificationcode_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE,
    api_v1_verificationcode_partial_updateWorker
  )
}
function* api_v1_verificationcode_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_verificationcode_delete, action)
    yield put(actions.api_v1_verificationcode_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_verificationcode_deleteFailed(err))
  }
}
function* api_v1_verificationcode_deleteWatcher() {
  yield takeEvery(
    types.API_V1_VERIFICATIONCODE_DELETE,
    api_v1_verificationcode_deleteWorker
  )
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(actions.rest_auth_password_reset_confirm_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_confirm_createFailed(err))
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(result)
    )
  } catch (err) {
    yield put(actions.rest_auth_registration_verify_email_createFailed(err))
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_contact_listWatcher,
    api_v1_contact_createWatcher,
    api_v1_contact_readWatcher,
    api_v1_contact_updateWatcher,
    api_v1_contact_partial_updateWatcher,
    api_v1_contact_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_forwardedmessage_listWatcher,
    api_v1_forwardedmessage_createWatcher,
    api_v1_forwardedmessage_readWatcher,
    api_v1_forwardedmessage_updateWatcher,
    api_v1_forwardedmessage_partial_updateWatcher,
    api_v1_forwardedmessage_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_login_createWatcher,
    api_v1_message_listWatcher,
    api_v1_message_createWatcher,
    api_v1_message_readWatcher,
    api_v1_message_updateWatcher,
    api_v1_message_partial_updateWatcher,
    api_v1_message_deleteWatcher,
    api_v1_messageaction_listWatcher,
    api_v1_messageaction_createWatcher,
    api_v1_messageaction_readWatcher,
    api_v1_messageaction_updateWatcher,
    api_v1_messageaction_partial_updateWatcher,
    api_v1_messageaction_deleteWatcher,
    api_v1_profile_listWatcher,
    api_v1_profile_createWatcher,
    api_v1_profile_readWatcher,
    api_v1_profile_updateWatcher,
    api_v1_profile_partial_updateWatcher,
    api_v1_profile_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_thread_listWatcher,
    api_v1_thread_createWatcher,
    api_v1_thread_readWatcher,
    api_v1_thread_updateWatcher,
    api_v1_thread_partial_updateWatcher,
    api_v1_thread_deleteWatcher,
    api_v1_threadaction_listWatcher,
    api_v1_threadaction_createWatcher,
    api_v1_threadaction_readWatcher,
    api_v1_threadaction_updateWatcher,
    api_v1_threadaction_partial_updateWatcher,
    api_v1_threadaction_deleteWatcher,
    api_v1_threadmember_listWatcher,
    api_v1_threadmember_createWatcher,
    api_v1_threadmember_readWatcher,
    api_v1_threadmember_updateWatcher,
    api_v1_threadmember_partial_updateWatcher,
    api_v1_threadmember_deleteWatcher,
    api_v1_user_listWatcher,
    api_v1_user_createWatcher,
    api_v1_user_readWatcher,
    api_v1_user_updateWatcher,
    api_v1_user_partial_updateWatcher,
    api_v1_user_deleteWatcher,
    api_v1_verificationcode_listWatcher,
    api_v1_verificationcode_createWatcher,
    api_v1_verificationcode_readWatcher,
    api_v1_verificationcode_updateWatcher,
    api_v1_verificationcode_partial_updateWatcher,
    api_v1_verificationcode_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
