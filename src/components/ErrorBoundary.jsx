import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <section className="event-details">
          <div className="event-details-content">
            <h2 className="event-details-title">Something Went Wrong</h2>
            <p className="event-details-subtitle">
              An unexpected error occurred. Please try again later.
            </p>
            {/* Replace with your blog website URL, e.g., https://your-blog-website.com */}
            <a
              href="https://your-blog-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="event-details-button"
            >
              Back to Home
            </a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;