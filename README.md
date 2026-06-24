# Shopify Order Automation using Pipedream

## Assignment Overview

This workflow automates customer communication after receiving a Shopify Order webhook.

## Workflow

1. Receive Shopify Order Webhook
2. Check Order Tag = MakeOrder
3. Check Customer Tag = ColdCustomer
4. Check Order Total > ₹2500
5. Send Welcome Email
6. Wait 5 Minutes
7. Send Discount Email

## Conditions

- Order Tag must be MakeOrder
- Customer Tag must be ColdCustomer
- Order Amount must be greater than ₹2500

## Emails

### Email 1

Sent immediately after successful validation.

Subject:
Welcome!

Body:

Hi,

We have received your order and are excited to onboard you.

Thank you.

---

### Email 2

Sent after 5 minutes.

Subject:
New Discount Unlocked!

Body:

Hi,

A new discount has been unlocked for your account.

Use it on your next purchase.

Thank you.

## Technologies Used

- Pipedream
- HTTP Webhook
- JavaScript
- Gmail
- Delay Workflow

## Testing

The workflow has been successfully tested.

It correctly:

- Receives webhook
- Validates conditions
- Sends first email
- Waits for configured delay
- Sends second email

## Deployment

Deployment could not be completed because Pipedream requires an Advanced Plan for workflows using the If/Else Logical Branching feature.

The workflow implementation and testing were completed successfully.
