export default defineComponent({
  async run({ steps, $ }) {

    const order = steps.trigger.event.body;

    const orderTags = (order.tags || "").split(",").map(t => t.trim());

    const customerTags = (
      order.customer?.tags || ""
    ).split(",").map(t => t.trim());

    const proceed =
      orderTags.includes("MakeOrder") &&
      customerTags.includes("ColdCustomer") &&
      Number(order.total_price) > 2500;

    return {
      proceed,
      orderAmount: Number(order.total_price),
      orderTags,
      customerTags,
      customerEmail: order.customer?.email
    };
  }
});
