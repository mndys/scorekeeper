import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('has two Buttons with text "Create" and "History"', () => {
    render(<Navigation currentPage="play" />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)

    expect(buttons[0]).toHaveTextContent('Play')
    expect(buttons[1]).toHaveTextContent('History')
  })

  it('sets a different background-color for `currentPage`', () => {
    const { rerender } = render(<Navigation currentPage="play" />)
    const buttons = screen.getAllByRole('button')
    const activeColor = getComputedStyle(buttons[0]).backgroundColor
    const inactiveColor = getComputedStyle(buttons[1]).backgroundColor
    expect(activeColor).not.toBe(inactiveColor)
    rerender(<Navigation currentPage="history" />) // change the active button
    expect(getComputedStyle(buttons[0]).backgroundColor).toBe(inactiveColor)
  })

  it('calls onNavigate with "play" or "history"', () => {
    const callback = jest.fn()
    render(<Navigation currentPage="play" onNavigate={callback} />)
    const playButton = screen.getByRole('button', { name: /play/i })
    userEvent.click(playButton)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('play')
  })
})
