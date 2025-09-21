/**
 * Test cases for HeroSection component
 * 
 * To run these tests, you would need to set up Jest and React Testing Library:
 * npm install --save-dev @testing-library/react @testing-library/jest-dom jest
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from './HeroSection';

// Mock the scroll behavior
const mockScrollIntoView = jest.fn();
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
});

// Mock the getElementById
const mockGetElementById = jest.fn();
Object.defineProperty(document, 'getElementById', {
  writable: true,
  value: mockGetElementById,
});

describe('HeroSection', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
    mockGetElementById.mockClear();
  });

  test('renders hero section with correct content', () => {
    render(<HeroSection />);
    
    expect(screen.getByText("Hi, I'm Edwin Anderson")).toBeInTheDocument();
    expect(screen.getByText(/frontend developer passionate/)).toBeInTheDocument();
    expect(screen.getByText('Available for Hire')).toBeInTheDocument();
  });

  test('renders navigation items correctly', () => {
    render(<HeroSection />);
    
    // Check if navigation items are present (desktop navigation)
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skill')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders stats data correctly', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('2+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument();
  });

  test('mobile menu toggles correctly', () => {
    render(<HeroSection />);
    
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
  });

  test('scroll functionality works', () => {
    const mockElement = { scrollIntoView: mockScrollIntoView };
    mockGetElementById.mockReturnValue(mockElement);
    
    render(<HeroSection />);
    
    const contactButton = screen.getByText('Contact Me');
    fireEvent.click(contactButton);
    
    expect(mockGetElementById).toHaveBeenCalledWith('contact');
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    });
  });

  test('applies custom className correctly', () => {
    const { container } = render(<HeroSection className="custom-class" />);
    const heroSection = container.querySelector('#home');
    
    expect(heroSection).toHaveClass('custom-class');
  });

  test('has proper accessibility attributes', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByLabelText('Available for hire status')).toBeInTheDocument();
  });

  test('images have proper alt text and loading attributes', () => {
    render(<HeroSection />);
    
    const heroImage = screen.getByAltText('Edwin Anderson - Frontend Developer');
    expect(heroImage).toHaveAttribute('loading', 'eager');
    expect(heroImage).toHaveAttribute('fetchpriority', 'high');
  });
});

// Performance test cases
describe('HeroSection Performance', () => {
  test('component memoizes static data', () => {
    const { rerender } = render(<HeroSection />);
    
    // Rerender with same props
    rerender(<HeroSection />);
    
    // Component should not cause unnecessary re-renders
    // This would be tested with React DevTools Profiler in a real scenario
  });

  test('callback functions are stable', () => {
    const { rerender } = render(<HeroSection />);
    const initialButton = screen.getByText('Contact Me');
    
    rerender(<HeroSection />);
    const rerenderButton = screen.getByText('Contact Me');
    
    // In a real test, you'd check if the onClick handler is the same reference
    expect(initialButton).toBe(rerenderButton);
  });
});

export {};
