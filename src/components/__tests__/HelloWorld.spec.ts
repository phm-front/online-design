import { describe, it, expect, vi } from 'vitest'
import axios from 'axios';
vi.mock('axios')
// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

it('test mock axios', async () => {
  const res = await axios.get('');
  expect(res).toBe('susan')
})
