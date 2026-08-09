# Animated Components Quick Reference

## Quick Import

```typescript
import {
  ServiceCard,
  StatsCounter,
  TeamCard,
  ProcessTimeline,
  TestimonialCard,
  ScrollReveal,
  FloatingElements,
} from '@/components';
```

## Component Quick Setup

### 1️⃣ ServiceCard
**Best for:** Service offerings, features, product cards

```tsx
<ServiceCard
  title="Tax Planning"
  description="Strategic tax optimization"
  icon={DollarSign}
  onClick={() => handleClick()}
/>
```

### 2️⃣ StatsCounter
**Best for:** Statistics, metrics, key numbers that need emphasis

```tsx
<StatsCounter
  endValue={500}
  label="Happy Clients"
  suffix="+"
/>
```

### 3️⃣ TeamCard
**Best for:** Team member profiles, staff directory

```tsx
<TeamCard
  name="John Doe"
  designation="Senior CA"
  image="url-to-image"
  bio="Professional bio here"
  socialLinks={[
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ]}
/>
```

### 4️⃣ ProcessTimeline
**Best for:** Step-by-step processes, workflows, roadmaps

```tsx
<ProcessTimeline
  steps={[
    {
      number: 1,
      title: "Step 1",
      description: "Description",
      icon: CheckCircle
    }
  ]}
/>
```

### 5️⃣ TestimonialCard
**Best for:** Client testimonials, reviews, success stories

```tsx
<TestimonialCard
  quote="Great service!"
  author="Client Name"
  designation="CEO"
  image="avatar-url"
  rating={5}
/>
```

### 6️⃣ ScrollReveal
**Best for:** Any content that should animate when scrolled into view

```tsx
<ScrollReveal variant="slideUp" delay={0.2}>
  <div>Your content here</div>
</ScrollReveal>
```

**Variants:** `'fade' | 'slideUp' | 'slideLeft'`

### 7️⃣ FloatingElements
**Best for:** Background decoration, visual interest

```tsx
{/* Place at root or parent level */}
<FloatingElements count={5} colors={['from-blue-400 to-blue-600']} />
```

---

## Animation Timing Reference

| Component | Duration | Trigger |
|-----------|----------|---------|
| ServiceCard | 0.3s | Hover/Click |
| StatsCounter | 2s | Scroll into view |
| TeamCard | 0.3s | Hover |
| ProcessTimeline | 0.5s each | Scroll into view |
| TestimonialCard | 0.6s staggered | Mount/View |
| ScrollReveal | 0.6s (custom) | Scroll into view |
| FloatingElements | 4-8s loop | Continuous |

---

## Common Patterns

### Full Page with All Components
See `EXAMPLE_PAGE.tsx` for a complete implementation.

### Wrap with ScrollReveal for Extra Animation
```tsx
<ScrollReveal variant="slideUp">
  <ServiceCard ... />
</ScrollReveal>
```

### Grid Layout for Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map(item => (
    <ServiceCard key={item.id} {...item} />
  ))}
</div>
```

### Background with FloatingElements
```tsx
<div className="relative">
  <FloatingElements count={5} />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

---

## Styling & Customization

### Color Scheme
- **Primary:** Blue (`bg-blue-600`, `text-blue-600`)
- **Accent:** Indigo (optional)
- **Neutral:** Gray

### Dark Mode Support
Components use Tailwind's default light mode. To add dark mode:

```tsx
{/* Add dark: variants to Tailwind classes */}
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

### Size Customization
Modify text sizes and spacing:
```tsx
{/* Change text-xl to text-lg or text-2xl */}
<h3 className="text-xl font-bold">...</h3>
```

---

## Performance Tips

✅ **DO:**
- Use ScrollReveal to wrap multiple components
- Place FloatingElements at page root
- Lazy load images in TeamCard and TestimonialCard
- Use key prop in mapped components

❌ **DON'T:**
- Nest FloatingElements multiple times
- Create animations inside other animations
- Use delay > 1s on visible elements (hurts UX)

---

## TypeScript Interfaces

All components export their prop interfaces:

```typescript
// Import interfaces for type safety
import type { ServiceCardProps } from '@/components/ServiceCard';
import type { StatsCounterProps } from '@/components/StatsCounter';
// etc...
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## Dependencies

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `framer-motion` >= 4.0.0
- `tailwindcss` >= 3.0.0
- `lucide-react` (for icons)

---

## Troubleshooting

**Animations not playing?**
- Check if Framer Motion is installed: `npm ls framer-motion`
- Verify Tailwind CSS is properly configured

**Icons not showing?**
- Import from lucide-react: `import { Check } from 'lucide-react'`

**Layout breaking on mobile?**
- Components are responsive by default
- Adjust grid columns in parent: `grid-cols-1 md:grid-cols-2`

**Scroll animations not triggering?**
- Check viewport settings in ScrollReveal
- Ensure parent has `overflow: visible` (default)

---

## See Also

- `COMPONENTS.md` - Detailed documentation
- `EXAMPLE_PAGE.tsx` - Complete implementation example
