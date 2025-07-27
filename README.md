# Wander Panda - Style Library Setup

## Custom Assets Integration

### 1. Font Setup

**Add your font files to `public/fonts/`:**
```
public/fonts/
├── wander-panda-regular.woff2
├── wander-panda-regular.woff
├── wander-panda-medium.woff2
├── wander-panda-medium.woff
├── wander-panda-bold.woff2
├── wander-panda-bold.woff
├── wander-panda-display-light.woff2
├── wander-panda-display-light.woff
├── wander-panda-display-regular.woff2
├── wander-panda-display-regular.woff
├── wander-panda-script.woff2
└── wander-panda-script.woff
```

**Update `src/styles/fonts.css`:**
- Replace `'WanderPandaFont'` with your actual font name
- Update file paths to match your font files
- Adjust font weights as needed

### 2. Logo Setup

**Add your logo files to `public/images/`:**
```
public/images/
├── logo.svg (or .png)
├── logo-white.svg (for dark backgrounds)
├── logo-small.svg (favicon)
└── favicon.ico
```

**Update components:**
- Uncomment logo `<img>` tags in `src/components/ui/Logo.tsx`
- Update paths to match your logo files
- Remove fallback text logo when ready

### 3. Icon Font Setup (Optional)

**If using custom icon font:**
- Add icon font files to `public/fonts/`
- Update `src/styles/icons.css` with your icon codes
- Use `<Icon name="your-icon" />` component

### 4. Using the Style Library

**Typography:**
```jsx
<h1 className="text-h1 font-secondary">Heading</h1>
<p className="text-body font-primary">Body text</p>
<em className="font-accent">Italic text</em>
```

**Components:**
```jsx
import Button from './components/ui/Button';
import { Card, CardContent } from './components/ui/Card';
import Logo from './components/ui/Logo';

<Button variant="primary" size="lg">Click me</Button>
<Card><CardContent>Card content</CardContent></Card>
<Logo size="lg" variant="white" />
```

**Colors (CSS Custom Properties):**
```css
.custom-element {
  background-color: var(--color-primary-500);
  color: var(--color-text-primary);
}
```

**Spacing:**
```jsx
<div className="p-lg m-xl">Content</div>
```

### 5. Design System Features

- **Consistent Color Palette**: Primary, neutral, and semantic colors
- **Typography Scale**: Display, heading, and body text styles
- **Spacing System**: 8px-based spacing scale
- **Component Library**: Reusable Button, Card, Logo, and Icon components
- **CSS Custom Properties**: Easy theming and customization
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Focus states, proper contrast, semantic HTML

### 6. Customization

**To customize colors:**
Edit `src/styles/design-system.css` and update CSS custom properties:
```css
:root {
  --color-primary-500: #your-brand-color;
  --color-primary-600: #your-brand-color-dark;
}
```

**To add new components:**
Create new files in `src/components/ui/` following the existing patterns.

**To modify typography:**
Update font sizes and line heights in `src/styles/design-system.css`.

This style library provides a solid foundation for maintaining consistent design across your Wander Panda website while making it easy to customize and extend as needed.