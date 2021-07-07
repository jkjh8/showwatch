import moment from 'moment'

export function updateTime ({ commit }, payload) {
  commit('updateCurrentTime', payload)
  commit('updateTime', moment(payload).format('hh:mm:ss'))
  commit('updateAmpm', moment(payload).format('a'))
  commit('updateDate', moment(payload).format('YYYY년 MM월 DD일 dddd'))
}
