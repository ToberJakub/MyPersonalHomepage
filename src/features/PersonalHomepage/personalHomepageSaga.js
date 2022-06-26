import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { fetchRepositories, fetchrepositoriesSuccess, fetchRepositoriesError } from './PersonalHomepageSlice';
import {getRepositories } from './personalHomepageAPI';

const loadingDelay = 2_000; 

function* fetchRepositoriesHandler({ playload: username }) {
    try {
        yield delay(loadingDelay); //just to demonstrate the loading
        const repositories = yield call(getRepositories, username);
        yield put(fetchrepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* personalHomePageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}