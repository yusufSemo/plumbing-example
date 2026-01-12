// app/config/locationsConfig.js
// Extends your existing config pattern with rich location data for local SEO

export const locationsConfig = {
  // Your headquarters
  headquarters: "North Richland Hills",
  state: "Texas",
  stateAbbr: "TX",
  serviceRadius: "30 miles",

  // All services you offer (matches your /services/ pages)
  services: [
    { name: "Drain Cleaning", slug: "drain-cleaning" },
    { name: "Emergency Plumbing", slug: "emergency-plumbing" },
    { name: "Water Heater Services", slug: "water-heater-services" },
    { name: "Leak Detection & Repair", slug: "leak-detection-repair" },
    { name: "Sewer Line Services", slug: "sewer-line-services" },
    { name: "Toilet Repair & Installation", slug: "toilet-repair-installation" },
    { name: "Faucet & Fixture Services", slug: "faucet-fixture-services" },
    { name: "Garbage Disposal Services", slug: "garbage-disposal-services" },
    { name: "Gas Line Services", slug: "gas-line-services" },
    { name: "Kitchen Plumbing", slug: "kitchen-plumbing" },
    { name: "Bathroom Plumbing", slug: "bathroom-plumbing" },
    { name: "Pipe Repair & Replacement", slug: "pipe-repair-replacement" },
    { name: "Water Filtration", slug: "water-filtration" },
    { name: "Water Line Repair", slug: "water-line-repair" },
  ],

  // Location data - each city has UNIQUE content to avoid duplicate page penalties
  locations: [
    {
      city: "North Richland Hills",
      slug: "north-richland-hills",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: true,
      responseTime: "20-30 minutes",
      neighborhoods: [
        "Smithfield",
        "Iron Horse",
        "Meadow Lakes",
        "Holiday Heights",
        "North Hills",
        "Harmonson Farms",
      ],
      landmarks: [
        "NRH2O Family Water Park",
        "Iron Horse Golf Course",
        "Richland Hills",
      ],
      // IMPORTANT: These must be genuinely unique per city
      localChallenges: [
        "Older homes in established neighborhoods with galvanized pipe corrosion",
        "Hard water from Tarrant County water supply causing fixture buildup",
        "Shifting clay soil foundation movement affecting drain lines",
      ],
      localFacts: {
        waterSource: "City of Fort Worth/Tarrant Regional Water District",
        commonHomeAge: "Mix of 1970s-1990s established homes and newer developments",
        climateNote: "Hot summers strain water heaters; freeze risks in winter",
      },
      zipCodes: ["76180", "76182"],
      population: "70,000+",
      mapQuery: "North+Richland+Hills+TX",
      metaDescription:
        "Your local North Richland Hills plumber. Fast response, honest pricing, and quality work from your neighbors. Serving NRH since day one.",
    },
    {
      city: "Fort Worth",
      slug: "fort-worth",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "30-45 minutes",
      neighborhoods: [
        "Downtown Fort Worth",
        "Sundance Square",
        "TCU Area",
        "Westover Hills",
        "Ridglea",
        "Arlington Heights",
        "Southside",
        "Near North Side",
      ],
      landmarks: [
        "Fort Worth Stockyards",
        "Sundance Square",
        "TCU Campus",
        "Fort Worth Zoo",
      ],
      localChallenges: [
        "Historic homes near downtown with outdated cast iron and clay pipes",
        "Large variation in home ages creating diverse plumbing needs",
        "High summer water demand during drought conditions",
      ],
      localFacts: {
        waterSource: "Fort Worth Water Department from multiple regional reservoirs",
        commonHomeAge: "Everything from 1900s historic to brand new construction",
        climateNote: "Urban heat island effect increases summer water heater strain",
      },
      zipCodes: ["76102", "76103", "76104", "76107", "76109", "76110", "76116"],
      population: "935,000+",
      mapQuery: "Fort+Worth+TX",
      metaDescription:
        "Fort Worth plumbing services from a trusted local team. From the Stockyards to TCU, we're here when you need us.",
    },
    {
      city: "Hurst",
      slug: "hurst",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "15-25 minutes",
      neighborhoods: [
        "Bellaire Park",
        "Redbud",
        "Central Hurst",
        "East Hurst",
      ],
      landmarks: [
        "North East Mall",
        "Hurst Conference Center",
        "Chisholm Park",
      ],
      localChallenges: [
        "1960s-70s homes with original polybutylene piping needing replacement",
        "Slab foundations with under-slab leak potential",
        "Mature trees causing root intrusion in sewer lines",
      ],
      localFacts: {
        waterSource: "City of Hurst via Trinity River Authority",
        commonHomeAge: "Primarily 1960s-1980s suburban development",
        climateNote: "Similar to NRH with seasonal freeze concerns",
      },
      zipCodes: ["76053", "76054"],
      population: "39,000+",
      mapQuery: "Hurst+TX",
      metaDescription:
        "Hurst plumbing experts just minutes away. We know HEB area homes and their unique plumbing needs.",
    },
    {
      city: "Keller",
      slug: "keller",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "20-35 minutes",
      neighborhoods: [
        "Old Town Keller",
        "Hidden Lakes",
        "Marshall Ridge",
        "The Parks of Keller",
        "Shady Grove",
      ],
      landmarks: [
        "Keller Town Center",
        "Bear Creek Park",
        "Keller Pointe",
      ],
      localChallenges: [
        "Newer construction with builder-grade fixtures needing early replacement",
        "Large homes with complex plumbing systems and multiple water heaters",
        "Some properties still on well water with specific treatment needs",
      ],
      localFacts: {
        waterSource: "City of Keller municipal water",
        commonHomeAge: "Primarily 1990s-present with rapid growth",
        climateNote: "Larger lots mean longer water line runs",
      },
      zipCodes: ["76244", "76248"],
      population: "50,000+",
      mapQuery: "Keller+TX",
      metaDescription:
        "Keller plumbing services with the expertise your home deserves. From Hidden Lakes to Old Town, we've got you covered.",
    },
    {
      city: "Haltom City",
      slug: "haltom-city",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "15-25 minutes",
      neighborhoods: [
        "Birdville",
        "Diamond Oaks",
        "East Haltom",
        "West Haltom",
      ],
      landmarks: [
        "Buffalo Ridge Park",
        "Northeast Mall area",
        "Birdville ISD",
      ],
      localChallenges: [
        "Many 1950s-60s homes with original galvanized steel pipes",
        "Older sewer infrastructure with clay pipe deterioration",
        "Mixed residential/commercial areas with varied plumbing codes",
      ],
      localFacts: {
        waterSource: "City of Fort Worth water supply",
        commonHomeAge: "Post-war development, many homes 50+ years old",
        climateNote: "Established trees create root intrusion risks",
      },
      zipCodes: ["76117", "76137"],
      population: "44,000+",
      mapQuery: "Haltom+City+TX",
      metaDescription:
        "Haltom City plumber who understands older homes. Honest service, fair prices, no surprises.",
    },
    {
      city: "Watauga",
      slug: "watauga",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "15-20 minutes",
      neighborhoods: [
        "Watauga Woods",
        "Capp Smith Park area",
        "Central Watauga",
      ],
      landmarks: [
        "Watauga Community Center",
        "Capp Smith Park",
        "Big Fossil Creek",
      ],
      localChallenges: [
        "Compact lot sizes with limited access for main line repairs",
        "1970s-80s homes with aging water heaters and fixtures",
        "Soil movement affecting foundation and plumbing connections",
      ],
      localFacts: {
        waterSource: "City of Fort Worth water system",
        commonHomeAge: "Primarily 1970s-1990s suburban homes",
        climateNote: "Close-knit neighborhoods mean we're always nearby",
      },
      zipCodes: ["76148"],
      population: "24,000+",
      mapQuery: "Watauga+TX",
      metaDescription:
        "Watauga's neighborhood plumber. Quick response, quality work, and prices that respect your budget.",
    },
    {
      city: "Colleyville",
      slug: "colleyville",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "20-30 minutes",
      neighborhoods: [
        "Colleyville Downs",
        "Montclair Parc",
        "Steeple Chase",
        "Colleyville Heights",
      ],
      landmarks: [
        "Colleyville Town Center",
        "McPherson Park",
        "Colleyville Nature Center",
      ],
      localChallenges: [
        "Larger custom homes with tankless water heaters and complex systems",
        "High-end fixtures requiring specialized repair knowledge",
        "Some properties with private wells and septic systems",
      ],
      localFacts: {
        waterSource: "City of Colleyville municipal water",
        commonHomeAge: "Mix of 1980s established homes and newer luxury builds",
        climateNote: "Larger properties mean more outdoor plumbing needs",
      },
      zipCodes: ["76034"],
      population: "27,000+",
      mapQuery: "Colleyville+TX",
      metaDescription:
        "Colleyville plumbing with the quality and professionalism your home deserves. Expert care for upscale properties.",
    },
    {
      city: "Bedford",
      slug: "bedford",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "15-25 minutes",
      neighborhoods: [
        "Stonegate",
        "Bedford Heights",
        "Meadowpark",
        "Shady Brook",
      ],
      landmarks: [
        "Bedford Boys Ranch",
        "Old Bedford School",
        "HEB Central area",
      ],
      localChallenges: [
        "Established 1970s-80s homes with polybutylene pipe concerns",
        "Central HEB location means quick parts availability",
        "Mix of original and renovated homes with varied plumbing ages",
      ],
      localFacts: {
        waterSource: "City of Bedford via Trinity River Authority",
        commonHomeAge: "Primarily 1970s-1990s with some newer infill",
        climateNote: "Well-maintained older neighborhoods",
      },
      zipCodes: ["76021", "76022"],
      population: "49,000+",
      mapQuery: "Bedford+TX",
      metaDescription:
        "Bedford plumbing from the HEB experts. Fast service to Stonegate, Bedford Heights, and all Bedford neighborhoods.",
    },
    {
      city: "Euless",
      slug: "euless",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "20-30 minutes",
      neighborhoods: [
        "Bear Creek",
        "Midway Park",
        "Lakewood",
        "Fuller Heights",
      ],
      landmarks: [
        "Texas Star Golf Course",
        "DFW Airport proximity",
        "Bear Creek Park",
      ],
      localChallenges: [
        "Airport proximity means some commercial/residential mixed plumbing needs",
        "Diverse housing stock from apartments to single-family homes",
        "Some areas with older infrastructure from 1960s development",
      ],
      localFacts: {
        waterSource: "City of Euless water department",
        commonHomeAge: "1960s-present with ongoing redevelopment",
        climateNote: "High-traffic area benefits from quick local service",
      },
      zipCodes: ["76039", "76040"],
      population: "56,000+",
      mapQuery: "Euless+TX",
      metaDescription:
        "Euless plumbing services with fast response times. Serving Bear Creek to Midway Park and everywhere in between.",
    },
    {
      city: "Grapevine",
      slug: "grapevine",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "25-35 minutes",
      neighborhoods: [
        "Historic Downtown",
        "Silver Lake",
        "Stone Bridge Oaks",
        "Lakeside Estates",
      ],
      landmarks: [
        "Grapevine Mills Mall",
        "Historic Main Street",
        "Grapevine Lake",
        "Great Wolf Lodge",
      ],
      localChallenges: [
        "Historic downtown buildings with century-old plumbing systems",
        "Lake-area homes with specific drainage and sump pump needs",
        "Tourism-driven businesses needing reliable commercial plumbing",
      ],
      localFacts: {
        waterSource: "City of Grapevine municipal water",
        commonHomeAge: "Historic core plus 1980s-present suburban growth",
        climateNote: "Lake proximity affects some properties' water tables",
      },
      zipCodes: ["76051"],
      population: "54,000+",
      mapQuery: "Grapevine+TX",
      metaDescription:
        "Grapevine plumbing experts. From historic Main Street to lakeside homes, we handle it all.",
    },
    {
      city: "Southlake",
      slug: "southlake",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "25-40 minutes",
      neighborhoods: [
        "Southlake Town Square",
        "Timarron",
        "Shady Oaks",
        "Whites Chapel",
      ],
      landmarks: [
        "Southlake Town Square",
        "Bob Jones Park",
        "Carroll ISD",
      ],
      localChallenges: [
        "Luxury homes with high-end plumbing systems and smart home integration",
        "Large properties with multiple bathrooms and complex water heating needs",
        "Outdoor kitchens and pool houses with additional plumbing requirements",
      ],
      localFacts: {
        waterSource: "City of Southlake water",
        commonHomeAge: "Primarily 1990s-present upscale development",
        climateNote: "Larger lots often mean irrigation and outdoor plumbing needs",
      },
      zipCodes: ["76092"],
      population: "32,000+",
      mapQuery: "Southlake+TX",
      metaDescription:
        "Southlake plumbing with the expertise and professionalism that matches your standards. Premium service for premium homes.",
    },
    {
      city: "Arlington",
      slug: "arlington",
      state: "Texas",
      stateAbbr: "TX",
      isHeadquarters: false,
      responseTime: "30-45 minutes",
      neighborhoods: [
        "North Arlington",
        "Pantego",
        "Dalworthington Gardens",
        "Entertainment District",
        "UT Arlington area",
      ],
      landmarks: [
        "AT&T Stadium",
        "Globe Life Field",
        "Six Flags Over Texas",
        "UT Arlington",
      ],
      localChallenges: [
        "Massive city with diverse housing from all decades",
        "Entertainment district properties with commercial-grade needs",
        "Student housing around UTA with high turnover maintenance",
      ],
      localFacts: {
        waterSource: "City of Arlington Water Utilities",
        commonHomeAge: "Everything from 1950s to new construction",
        climateNote: "Large geographic area means we focus on North Arlington",
      },
      zipCodes: ["76010", "76011", "76012", "76013", "76014", "76015", "76016", "76017", "76018"],
      population: "394,000+",
      mapQuery: "Arlington+TX",
      metaDescription:
        "Arlington plumbing services focusing on North Arlington and surrounding neighborhoods. Big city, local service.",
    },
  ],
};

// Helper functions
export function getLocationBySlug(slug) {
  return locationsConfig.locations.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs() {
  return locationsConfig.locations.map((loc) => loc.slug);
}

export function getLocationsByResponseTime() {
  return [...locationsConfig.locations].sort((a, b) => {
    const aTime = parseInt(a.responseTime.split("-")[0]);
    const bTime = parseInt(b.responseTime.split("-")[0]);
    return aTime - bTime;
  });
}
