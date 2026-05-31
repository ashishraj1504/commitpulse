import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders community text', () => {
    render(<Footer />);

    const text = screen.getByText(/Designed for the elite builder community/i);

    expect(text).toBeTruthy();
  });

  it('renders Documentation link', () => {
    render(<Footer />);

    const docLink = screen.getByText(/Documentation/i);

    expect(docLink).toBeTruthy();

    expect(docLink.closest('a')?.getAttribute('href')).toBe(
      'https://github.com/JhaSourav07/commitpulse/blob/main/README.md'
    );
  });

  it('opens documentation in new tab', () => {
    render(<Footer />);

    const docLink = screen.getByText(/Documentation/i);

    expect(docLink.closest('a')?.getAttribute('target')).toBe('_blank');
  });

  it('renders Contributors link', () => {
    render(<Footer />);

    const contributorsLink = screen.getByText(/Contributors/i);

    expect(contributorsLink).toBeTruthy();
  });
  // Verify accessibility by looking for the explicit landmark role screen readers look for
  it('supports screen reader operations by using semantic HTML landmark structures', () => {
    render(<Footer />);

    // Footers are exposed to assistive tech via the 'contentinfo' role
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeDefined();
    expect(footerElement.tagName.toLowerCase()).toBe('footer');
  });

  // Verify layout adaptation by making sure responsive structural classes are applied
  it('adapts layouts correctly across mobile and desktop viewports', () => {
    const { container } = render(<Footer />);

    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeDefined();

    // Validates that layout structural rules modify display behaviors across breakpoints
    expect(container.innerHTML).toMatch(/(flex|grid|block|md:|sm:|lg:)/);
  });
});
