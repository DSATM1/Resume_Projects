# Enhanced Animated Components Documentation

This directory contains 7 production-ready animated React components built with Framer Motion and Tailwind CSS for a CA firm website.

## Components Overview

### 1. **ServiceCard.tsx**
Service card component with professional animations for showcasing services.

**Features:**
- Icon animation on hover (bounce effect)
- Card scale animation on hover
- Arrow icon with slide animation
- Customizable onClick handler

**Props:**
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}
```

**Usage Example:**
```typescript
import { ServiceCard } from '@/components';
import { DollarSign } from 'lucide-react';

<ServiceCard
  title="Tax Planning"
  description="Strategic tax optimization for maximum savings"
  icon={DollarSign}
  onClick={() => console.log('Clicked')}
/>
```

---

### 2. **StatsCounter.tsx**
Animated counter that counts up from 0 to a target value when scrolled into view.

**Features:**
- Smooth count-up animation (2-second duration)
- Triggered on scroll into view using Intersection Observer
- Only animates once
- Customizable suffix (%, +, etc.)

**Props:**
```typescript
interface StatsCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
}
```

**Usage Example:**
```typescript
import { StatsCounter } from '@/components';

<StatsCounter
  endValue={500}
  label="Happy Clients"
  suffix="+"
/>
```

---

### 3. **TeamCard.tsx**
Team member card with image zoom, bio reveal, and animated social links.

**Features:**
- Image zoom on hover
- Bio reveal animation
- Social links appear on hover with staggered animation
- Smooth transitions

**Props:**
```typescript
interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
  socialLinks: SocialLink[];
}
```

**Usage Example:**
```typescript
import { TeamCard } from '@/components';
import { Linkedin, Mail } from 'lucide-react';

<TeamCard
  name="John Doe"
  designation="Senior CA"
  image="https://example.com/john.jpg"
  bio="15+ years of CA experience"
  socialLinks={[
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:john@example.com',
      label: 'Email'
    }
  ]}
/>
```

---

### 4. **ProcessTimeline.tsx**
Vertical timeline showing process steps with numbered badges and animations.

**Features:**
- Vertical timeline with alternating layout
- Numbered step badges
- Pulsing ring animation around badges
- Staggered animations on scroll into view
- Icon support for each step

**Props:**
```typescript
interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}
```

**Usage Example:**
```typescript
import { ProcessTimeline } from '@/components';
import { CheckCircle, FileText, DollarSign, CheckCheck } from 'lucide-react';

<ProcessTimeline
  steps={[
    {
      number: 1,
      title: "Consultation",
      description: "Initial meeting to understand your needs",
      icon: CheckCircle
    },
    {
      number: 2,
      title: "Documentation",
      description: "Gather all required financial documents",
      icon: FileText
    },
    {
      number: 3,
      title: "Analysis",
      description: "Comprehensive review and planning",
      icon: DollarSign
    },
    {
      number: 4,
      title: "Delivery",
      description: "Present recommendations and solutions",
      icon: CheckCheck
    }
  ]}
/>
```

---

### 5. **TestimonialCard.tsx**
Testimonial card with star rating, animated quote reveal, and author info.

**Features:**
- Star rating display with hover animation
- Animated quote reveal
- Author avatar with hover scale
- Line-by-line reveal animation
- Decorative animated quote mark

**Props:**
```typescript
interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  image: string;
  rating: number;
}
```

**Usage Example:**
```typescript
import { TestimonialCard } from '@/components';

<TestimonialCard
  quote="Outstanding tax planning services! They saved us thousands."
  author="Rajesh Kumar"
  designation="Business Owner"
  image="https://example.com/rajesh.jpg"
  rating={5}
/>
```

---

### 6. **ScrollReveal.tsx**
Versatile wrapper component for scroll-triggered reveal animations.

**Features:**
- Three animation variants: fade, slideUp, slideLeft
- Configurable delay and duration
- Triggers once on scroll into view
- Can wrap any children

**Props:**
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slideUp' | 'slideLeft';
  delay?: number;
  duration?: number;
}
```

**Usage Example:**
```typescript
import { ScrollReveal } from '@/components';

<ScrollReveal variant="slideUp" delay={0.2} duration={0.6}>
  <div className="p-8 bg-white rounded-lg">
    This content will slide up when scrolled into view
  </div>
</ScrollReveal>
```

---

### 7. **FloatingElements.tsx**
Decorative background component with animated floating shapes.

**Features:**
- Configurable number of floating elements
- Multiple gradient colors
- Two layers: fast-moving and slow-moving elements
- Fixed positioning for background use
- Smooth continuous animations

**Props:**
```typescript
interface FloatingElementsProps {
  count?: number;
  colors?: string[];
}
```

**Usage Example:**
```typescript
import { FloatingElements } from '@/components';

// Place at the root level or behind other content
<FloatingElements
  count={5}
  colors={[
    'from-blue-400 to-blue-600',
    'from-indigo-400 to-indigo-600',
    'from-purple-400 to-purple-600'
  ]}
/>
```

---

## Animation Specifications

All components use Framer Motion with these principles:
- **Duration:** 0.3-0.6s for interactive animations
- **Ease:** smooth easeOut for scroll reveals, spring damping for bouncy effects
- **Performance:** All animations use `transform` and `opacity` (GPU accelerated)
- **Accessibility:** Animations trigger on user interaction or scroll, not on load

## Styling

All components use **Tailwind CSS** with:
- Consistent blue color scheme (blue-600 primary)
- Professional shadow effects
- Responsive design (mobile-first)
- Hover states with smooth transitions

## TypeScript

All components export:
- Named component export (`export { ComponentName }`)
- Proper interface definitions
- React.FC<Props> pattern
- Full type safety

## Performance Optimization

- Components use React.memo where appropriate
- Intersection Observer for scroll detection
- GPU-accelerated transforms
- Lazy animations with proper cleanup

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires Framer Motion 4.0+
- Tailwind CSS 3.0+
- React 18.0+

## Color Customization

Most components use Tailwind's blue palette. To customize:
1. Modify className values (e.g., `text-blue-600` → `text-indigo-600`)
2. Update the Tailwind config for global color changes
3. Pass custom colors to FloatingElements via the `colors` prop

## Next Steps

1. Import components into your pages
2. Customize props and styling as needed
3. Combine ScrollReveal wrapper for additional scroll animations
4. Layer FloatingElements in page backgrounds for visual interest
