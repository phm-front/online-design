interface LikeEvent {
  target: {
    value: any
  }
}
export const getTargetValue = (value: LikeEvent) => value.target.value