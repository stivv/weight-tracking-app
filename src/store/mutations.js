export default {
  addWeightRecord: (state, payload) => {
    const newRecord = {date: new Date, weight: payload.weight+'kg'}
    state.records = [newRecord, ...state.records]
  }
}