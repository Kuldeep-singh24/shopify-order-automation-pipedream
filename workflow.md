# Pipedream Workflow Documentation

## Project
Shopify Order Automation using Pipedream

## Objective

This workflow receives a Shopify Order webhook and performs automated customer communication based on specific conditions.

---

## Workflow Steps

### 1. HTTP Trigger
- Receives the Shopify `orders/create` webhook.
- Accepts the complete JSON payload.

---

### 2. Code Step

Extracts the required information from the webhook payload.

Variables checked:

- Order Tag
- Customer Tag
- Order Amount

Returns:

```javascript
{
  proceed: (
    orderTag === "MakeOrder" &&
    customerTag === "ColdCustomer" &&
    orderAmount > 2500
  )
}
```

---

### 3. IF Condition

Condition:

```
steps.code.$return_value.proceed == true
```

If TRUE:
- Continue workflow.

If FALSE:
- Workflow stops.

---

### 4. Send Email #1

Sent immediately after validation.

Subject:

```
Welcome! Your Order Has Been Received
```

Purpose:

- Thank the customer.
- Confirm that the order has been received.
- Welcome the customer.

---

### 5. Delay Step

Waits for:

```
5 minutes
```

*(For testing, the delay was temporarily configured as 10 seconds.)*

---

### 6. Send Email #2

Subject:

```
New Discount Unlocked!
```

Purpose:

- Inform the customer that a new discount has been unlocked.
- Encourage future purchases.

---

## Workflow Logic

```
Webhook
    │
    ▼
Code Step
    │
    ▼
IF
├── TRUE
│     │
│     ▼
│  Send Email #1
│     │
│     ▼
│  Delay (5 min)
│     │
│     ▼
│  Send Email #2
│
└── FALSE
      │
      ▼
     Stop
```

---

## Conditions

The workflow proceeds only when all of the following are true:

- Order Tag = MakeOrder
- Customer Tag = ColdCustomer
- Order Amount > ₹2500

Otherwise, the workflow ends without sending any email.

---

## Testing

The workflow was successfully tested in Pipedream.

Verified:

- Webhook received successfully.
- Condition evaluated correctly.
- First email sent successfully.
- Delay executed successfully.
- Second email sent successfully.

Screenshots are included in the `screenshots/` folder.
