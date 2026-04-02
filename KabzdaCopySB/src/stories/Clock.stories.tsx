import type { Meta, StoryObj } from '@storybook/react-vite'
import { Clock } from '../components/Clock/Clock'

const meta = {
    title: 'Clock',
    component: Clock,
} satisfies Meta<typeof Clock>

export default meta

type Story = StoryObj<typeof meta>

export const BaseAnalogExample: Story = {
    args: {
        mode: 'analog',
    },
}

export const BaseDigitalExample: Story = {
    args: {
        mode: 'digital',
    },
}