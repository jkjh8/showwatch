import moment from 'moment'

export function updateTime ({ state, commit }, payload) {
  const r = {
    timestamp: payload,
    date: moment(payload).format('YYYY년 MM월 DD일 dddd'),
    time: moment(payload).format('hh:mm:ss'),
    ampm: moment(payload).format('a')
  }
  commit('updateTime', r)
  if (state.startStatus) {
    const t1 = state.startTime.timestamp
    const t2 = payload
    const h = stringAdd(moment.duration(t2.diff(t1)).hours())
    const m = stringAdd(moment.duration(t2.diff(t1)).minutes())
    const s = stringAdd(moment.duration(t2.diff(t1)).seconds())
    // const ms = stringAdd(moment.duration(t2.diff(t1)).milliseconds())
    commit('updateTakeTime', `${h}:${m}:${s}`)
  }
}

export function updateStartTime ({ commit }) {
  const r = {
    timestamp: moment(),
    date: moment().format('YYYY년 MM월 DD일 dddd'),
    time: moment().format('hh:mm:ss'),
    ampm: moment().format('a')
  }
  commit('updateStartTime', r)
}

function stringAdd (time) {
  if (time < 10) {
    return '0' + time
  }
  return time
}
