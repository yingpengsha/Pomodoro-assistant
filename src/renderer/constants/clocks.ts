export interface ClockType {
  name: string
  key: string
  color: string
  minTime: number
}

const Clocks: ClockType[] = [
  {
    name: '普通',
    key: 'normal',
    color: '#f5222d',
    minTime: 25 * 60 * 1000
  },
  {
    name: '读书',
    key: 'read',
    color: '#52c41a',
    minTime: 25 * 60 * 1000
  },
  {
    name: '学习',
    key: 'study',
    color: '#1890ff',
    minTime: 25 * 60 * 1000
  },
  {
    name: '代码',
    key: 'code',
    color: '#722ed1',
    minTime: 25 * 60 * 1000
  },
  {
    name: '冥想',
    key: 'meditation',
    color: '#d9d9d9',
    minTime: 10 * 60 * 1000
  }
]

export default Clocks