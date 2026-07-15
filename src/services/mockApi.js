// Mock services for Titan Freight Logistics
// Provides tracking, quote requesting, contact, and career application functionality.

export const mockShipmentService = {
  track: async (trackingNumber) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const cleanNum = trackingNumber.trim().toUpperCase();
    if (!cleanNum) {
      throw new Error("Tracking number is required.");
    }

    // List of some interesting drivers and statuses for realistic details
    const drivers = [
      "Marcus Vance",
      "Sarah Jenkins",
      "Carlos Ramirez",
      "Elena Rostova",
      "David Miller"
    ];
    const cities = [
      "Chicago, IL",
      "Dallas, TX",
      "Los Angeles, CA",
      "New York, NY",
      "Atlanta, GA",
      "Denver, CO"
    ];

    // Seed mock data based on the tracking number characters for consistency
    let seed = 0;
    for (let i = 0; i < cleanNum.length; i++) {
      seed += cleanNum.charCodeAt(i);
    }

    const driver = drivers[seed % drivers.length];
    const origin = cities[seed % cities.length];
    const destination = cities[(seed + 3) % cities.length];
    const currentLoc = cities[(seed + 1) % cities.length];

    // Random but stable status index based on seed
    const statuses = [
      "Order Received",
      "Picked Up",
      "In Transit",
      "Arrived at Distribution Center",
      "Out for Delivery",
      "Delivered"
    ];
    const currentStatusIndex = (seed % 6);
    const currentStatus = statuses[currentStatusIndex];

    // Calculate dates
    const today = new Date();
    const pickupDate = new Date(today);
    pickupDate.setDate(today.getDate() - (currentStatusIndex + 1));
    const deliveryDate = new Date(pickupDate);
    deliveryDate.setDate(pickupDate.getDate() + 5);

    // Timeline creation
    const timeline = statuses.map((status, index) => {
      const isCompleted = index <= currentStatusIndex;
      let timestamp = null;
      if (isCompleted) {
        const d = new Date(pickupDate);
        d.setHours(8 + index * 4, 30, 0);
        timestamp = d.toLocaleString();
      }
      return {
        status,
        completed: isCompleted,
        timestamp,
        description: getStatusDescription(status, driver, currentLoc, destination)
      };
    });

    return {
      shipmentId: cleanNum,
      pickupDate: pickupDate.toLocaleDateString(),
      estimatedDelivery: deliveryDate.toLocaleDateString(),
      currentStatus,
      currentLocation: currentStatusIndex === 5 ? destination : currentLoc,
      driverAssigned: driver,
      progress: Math.round(((currentStatusIndex + 1) / 6) * 100),
      timeline,
      origin,
      destination
    };
  }
};

function getStatusDescription(status, driver, location, destination) {
  switch (status) {
    case "Order Received":
      return "The shipping request has been processed and is scheduled for pickup.";
    case "Picked Up":
      return `Shipment picked up by driver ${driver} and is being prepared for transport.`;
    case "In Transit":
      return `Cargo is in transit through the hub at ${location}.`;
    case "Arrived at Distribution Center":
      return `Cargo has arrived at the major logistics distribution facility in ${location}.`;
    case "Out for Delivery":
      return `Driver ${driver} has dispatched with cargo for final delivery to ${destination}.`;
    case "Delivered":
      return `Successfully completed and signed off at destination in ${destination}.`;
    default:
      return "Shipment status updated.";
  }
}

export const mockQuoteService = {
  requestQuote: async (quoteData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Generate a random quote request ID
    const quoteId = "TFQ-" + Math.floor(100000 + Math.random() * 900000);
    return {
      success: true,
      quoteId,
      message: "Thank you! Your quote request has been received. Our freight specialist will contact you within 15 minutes with a custom rate.",
      submittedData: quoteData
    };
  }
};

export const mockCareerService = {
  apply: async (_applicationData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const appId = "TFC-" + Math.floor(10000 + Math.random() * 90000);
    return {
      success: true,
      appId,
      message: `Your application has been successfully submitted! Our recruiting team will review your profile and get back to you shortly.`
    };
  }
};

export const mockContactService = {
  sendMessage: async (_contactData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Your message has been sent successfully. We will respond to you within 2 business hours."
    };
  }
};

export const mockNewsletterService = {
  subscribe: async (_email) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Thank you for subscribing to the Titan Freight newsletter!"
    };
  }
};
