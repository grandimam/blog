---
layout: post
title: "Preventing Context Pollution in AI-Assisted Development"
date: 2024-12-25
description: "How to set up progressive disclosure for specification files to keep your AI assistant's context clean, focused, and cost-effective."
tags: [ai, coding, software-development, productivity, cursor, llm, context-management]
---

AI assistants are powerful, but they can get overwhelmed by too much context. Loading all your documentation upfront doesn't just waste tokens. It reduces accuracy and drives up costs.

Progressive disclosure solves this by loading only the specification files that are actually relevant.

## Context Pollution

Context pollution happens when irrelevant information fills your AI assistant's context window. You might be loading all your documentation upfront, dumping every spec, doc, and comment into one massive context. Or including entire codebases when you're only discussing one feature.

Historical noise from old conversations, deprecated features, and outdated docs can clutter things up. Redundant information, like multiple versions of the same concept, makes it worse.

Without progressive disclosure, you might load all 50 spec files totaling 250KB, which translates to 62,500 tokens. That's about $1.86 per request, with response times of 3 to 5 seconds. The AI struggles to find relevant information in all that noise.

With progressive disclosure, you load just 2 or 3 relevant specs totaling 15KB, which is 3,750 tokens. That's about $0.11 per request, with response times of 1 to 2 seconds. The AI has focused, relevant context.

## How It Works

The core principle is simple: reveal information progressively as it becomes relevant, rather than all at once.

In the traditional approach, when a user asks for help with VAS discount, the system loads all 50 spec files. The AI then tries to find relevant info in 250KB of context.

With progressive disclosure, when a user asks for help with VAS discount, the system detects the "VAS discount" topic and loads only `vas_discount.md`. The AI has focused, relevant context.

The system uses three components. First, spec files: your documentation organized in markdown files. Second, a metadata registry that maps topics to spec files. Third, LLM detection where the AI automatically detects when to load specs.

## Setting Up Progressive Disclosure

### Step 1: Organize Your Spec Files

Create a directory structure for your specifications:

```bash
mkdir -p ~/projects/.specs
cd ~/projects/.specs

# Organize by project/service
mkdir -p user-service/paa
mkdir -p user-service/checkout
mkdir -p user-service/auth
```

Follow these best practices: one spec per feature or topic, use descriptive filenames, organize by project or service, and keep specs focused and specific.

Here's an example structure:

```
~/projects/.specs/
├── user-service/
│   ├── paa/
│   │   ├── vas_discount.md
│   │   └── vas_pricing.md
│   └── checkout/
│       └── checkout_flow.md
└── user-service/
    └── authentication.md
```

### Step 2: Create Your Spec Files

Write clear, focused specification files:

```markdown
# VAS Discount Feature

## Overview
The VAS (Value Added Service) discount feature allows sellers to offer special pricing on value-added services.

## Business Rules
- Discounts can range from 5% to 50%
- Only applies to eligible VAS products
- Requires seller approval

## Implementation
[Technical details...]

## Related Features
- VAS Pricing
- Checkout Flow
```

Keep these points in mind: include topic keywords in the content, reference related features, keep each spec focused on one topic, and use clear headings and structure.

### Step 3: Create Metadata Registry

Create `~/projects/.specs/specs_metadata.yaml`:

```yaml
specs:
  - file: user-service/paa/vas_discount.md
    topics:
      - "VAS discount"
      - "vas discount"
      - "special offer on VAS"
      - "VAS offer"
      - "value added service discount"
      - "VAS pricing discount"
    description: "VAS discount feature - special offer on VAS products"
    project: "user-service"
    
  - file: user-service/paa/vas_discount_calculation.md
    topics:
      - "VAS discount calculation"
      - "vas calculation"
      - "discount calculation logic"
      - "how to calculate VAS discount"
    description: "Calculation logic for VAS discounts"
    project: "user-service"
    related:
      - "user-service/paa/vas_discount.md"
    
  - file: user-service/checkout/checkout_flow.md
    topics:
      - "checkout"
      - "checkout flow"
      - "payment processing"
      - "order completion"
    description: "Checkout flow implementation"
    project: "user-service"
```

For metadata, keep topics comprehensive. Include all variations: the exact feature name, lowercase version, common phrases, UI text like button labels, and technical terms.

Use natural language with conversational phrases like "how does VAS discount work" or "implementing VAS discount". Link related documentation explicitly.

### Step 4: Install Cursor Rule

Create `.cursor/rules/progressive_specs.mdc` in your workspace:

```markdown
---
description: Progressive disclosure for spec files in ~/projects/.specs
alwaysApply: true
---

# Progressive Spec Disclosure System

You are responsible for automatically loading specification files based on conversation topics to prevent context pollution.

## Your Role

When a user mentions a topic, you should:
1. Detect the topic from the conversation
2. Match it to specs in ~/projects/.specs/specs_metadata.yaml
3. Load only the relevant spec files
4. Apply them as context for your response

## Process

1. **Topic Detection**: Analyze the user's message to identify topics, features, or concepts
   - Look for explicit mentions (feature names, technical terms)
   - Consider implicit topics (related concepts)
   - Review conversation history for context

2. **Metadata Matching**: Read ~/projects/.specs/specs_metadata.yaml
   - Use semantic understanding to match topics
   - Consider variations and synonyms
   - Identify related specs that should also be loaded

3. **Spec Loading**: For each matched spec, read the file
   - Load content into your context
   - Announce: "Loading spec file: {file_path} for additional context"

4. **Context Application**: Use loaded specs to inform your response
   - Reference specific details from specs
   - Maintain awareness throughout the conversation

## Important Rules

- **Only load relevant specs**: Don't load everything, only what's needed
- **Use semantic matching**: Understand meaning, not just keywords
- **Consider related specs**: Load related specs when appropriate
- **Avoid context pollution**: Keep context focused and relevant
- **Mention loaded specs**: Let the user know what context you're using

## Example

User: "I need help with VAS discount"

You:
1. Detect topic: "VAS discount"
2. Match to: user-service/paa/vas_discount.md
3. Load spec file
4. Respond: "Loading spec file: user-service/paa/vas_discount.md for additional context. [Then provide help using the spec]"
```

The `alwaysApply: true` setting ensures it runs on every conversation. Clear instructions prevent over-loading. Semantic matching handles variations. Explicit mention of loaded specs provides transparency.

## How It Prevents Context Pollution

### Before Progressive Disclosure

When a user asks about "VAS discount", the context window might contain 62,500 tokens. Only 3,750 tokens from `vas_discount.md` are relevant.

The rest includes `vas_pricing.md` (2,500 tokens), `checkout_flow.md` (5,000 tokens), `authentication.md` (4,000 tokens), `payment_integration.md` (6,000 tokens), and 45 more irrelevant specs. Total: 62,500 tokens, but only 3,750 are relevant.

The problems are clear: 94% of context is irrelevant, the AI struggles to find relevant information, you pay high costs for mostly unused tokens, and response times are slower.

### With Progressive Disclosure

When a user asks about "VAS discount", the context window contains 3,750 tokens. All of it comes from `vas_discount.md` and is relevant.

The benefits: 100% of context is relevant, the AI has focused, clear information, you get a 94% cost reduction, and faster response times.

### Multi-Topic Scenarios

When a user asks about "VAS discount calculation", the context window contains 6,250 tokens. Both `vas_discount.md` (3,750 tokens) and `vas_discount_calculation.md` (2,500 tokens) are relevant.

The system automatically loads related specs when topics are connected.

## Practical Usage Examples

### Example 1: Single Topic

A user says: "I need to implement the VAS discount feature. Can you help?"

The system detects the topic "VAS discount", matches it to `user-service/paa/vas_discount.md`, loads the spec file, and the AI responds with spec-based guidance.

Only `vas_discount.md` (3,750 tokens) is loaded. Nothing else.

The result: focused context, accurate guidance, low cost, and fast response.

### Example 2: Multiple Related Topics

A user says: "I'm working on VAS discount and need to understand the calculation logic."

The system detects topics "VAS discount" and "calculation", matches them to `user-service/paa/vas_discount.md` and `user-service/paa/vas_discount_calculation.md`, loads both spec files, and the AI understands the relationship.

Both `vas_discount.md` (3,750 tokens) and `vas_discount_calculation.md` (2,500 tokens) are loaded. Nothing else.

The result: related specs loaded together, complete context for the question, and still focused and relevant.

### Example 3: General Question

A user says: "How do I write a unit test?"

The system detects a general programming question, finds no specific topic matches, loads no spec files, and the AI answers using general knowledge.

No spec files are loaded because it's a general question.

The result: clean response without unnecessary context, no cost for unused specs, and a fast general answer.

### Example 4: Implicit Topic Detection

A user says: "I'm having trouble with that special pricing thing for value-added services"

The LLM understands that "special pricing thing for value-added services" means VAS discount, matches it to `user-service/paa/vas_discount.md`, loads the spec file, and the AI provides relevant help.

Only `vas_discount.md` (3,750 tokens) is loaded.

The result: semantic understanding catches implicit references, relevant context loads even with vague phrasing, and accurate help is provided.

## Best Practices for Clean Context

### Metadata Maintenance

Keep topics comprehensive. Include the exact name, lowercase version, common phrases, UI text like button labels, full technical terms, question forms, and action-oriented phrases:

```yaml
topics:
  - "VAS discount"                    # Exact name
  - "vas discount"                    # Lowercase
  - "special offer on VAS"            # Common phrase
  - "VAS offer"                       # Short form
  - "value added service discount"    # Full form
  - "how does VAS discount work"      # Question form
  - "implementing VAS discount"        # Action form
```

Update regularly. Add topics as you discover new phrasings. Remove unused topics. Update descriptions when specs change. Link related specs explicitly.

### Spec File Organization

Keep one topic per file. A focused spec about VAS discount only is good. A spec that covers VAS discount, pricing, and checkout is bad.

Use a clear structure:

```markdown
# Feature Name

## Overview
[Brief description]

## Business Rules
[Rules and requirements]

## Implementation
[Technical details]

## Related Features
[Links to related specs]
```

### Topic Naming Strategy

Include variations: technical terms like "VAS discount", business terms like "special offer", UI text like "VAS Offer" for button labels, common phrases, and abbreviations if they stand alone.

Use natural language. Include conversational phrases, question forms, action-oriented phrases, and consider user intent.

### Avoiding Over-Loading

Be specific. Good topics are "VAS discount" and "VAS discount calculation". Bad topics are too broad like "discount" or "pricing" which match everything.

Use the related specs field instead of loading everything:

```yaml
related:
  - "user-service/paa/vas_discount.md"
  - "user-service/paa/vas_pricing.md"
```

## Monitoring and Optimization

### Track Context Usage

Monitor which specs are loaded. Check AI responses for "Loading spec file" messages. Review which topics trigger which specs. Identify over-matching or under-matching.

### Optimize Metadata

If specs aren't loading, add more topic variations, check that topic phrasing matches user language, and verify file paths are correct.

If too many specs load, make topics more specific, remove overly broad topics, and use related specs instead of loading everything.

### Refine Over Time

Start with basic topics. Monitor usage. Add variations as needed. Remove unused topics. Refine based on actual usage.

## Troubleshooting

### Specs Not Loading

If specs aren't being loaded when they should be, check that the metadata file exists at `~/projects/.specs/specs_metadata.yaml`, verify topics match user language, add more topic variations, check file paths are correct, and ensure the Cursor rule is active.

### Wrong Specs Loading

If irrelevant specs are being loaded, make topics more specific, remove overly broad topics, check for topic conflicts, and use the related specs field instead.

### Too Many Specs Loading

If the system loads too many specs at once, review topic specificity, remove generic topics, split large specs into smaller ones, and use the related specs field for connections.

## Advanced Techniques

### Context-Aware Loading

The LLM considers conversation history: previous topics discussed, related concepts mentioned, and implicit dependencies.

For example, in turn 1 a user asks about "VAS discount" and the system loads `vas_discount.md`. In turn 2, the user asks "How is it calculated?" and the system loads `vas_discount_calculation.md` because it's related to the previous topic.

### Project-Based Organization

Organize specs by project to enable project-wide context:

```yaml
specs:
  - file: user-service/paa/vas_discount.md
    project: "user-service"
    topics: ["VAS discount"]
```

When discussing a project, related specs can be loaded together.

### Priority-Based Loading

Use priority to handle conflicts:

```yaml
specs:
  - file: user-service/paa/vas_discount.md
    topics: ["VAS discount"]
    priority: 1  # High priority
    
  - file: shared/discount_policy.md
    topics: ["discount"]
    priority: 2  # Lower priority
```

Higher priority specs load first when multiple matches exist.

## Conclusion

Progressive disclosure prevents context pollution by loading only relevant specification files when needed.

This approach reduces costs with a 90%+ reduction in token usage. It improves accuracy because focused context leads to better responses. It increases speed since less context means faster processing. It scales well as your codebase grows. And it's easy to maintain with a simple metadata structure.

The key takeaways: organize specs in a clear directory structure, create comprehensive metadata with topic variations, install the Cursor rule for automatic detection, monitor and refine based on usage, and keep specs focused and well-organized.

By following this guide, you can enable progressive disclosure and keep your AI assistant's context clean, focused, and efficient. The result is better responses, lower costs, and faster development cycles.

---

*This system leverages LLM-based topic detection to provide semantic understanding without the infrastructure overhead of traditional RAG systems. It's ideal for teams with structured documentation who want intelligent context loading without the complexity.*
