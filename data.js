const pastConferences = [
    {
        year: "2023",
        speakers: [
            {name: "Charlie C.", homeTown: "Camarillo, CA", memberOf: "AA"},
            {name: "Andy D.", homeTown: "Norman, OK", memberOf: "AA"},
            {name: "Nick P.", homeTown: "Pittsburgh, PA", memberOf: "Al-Anon"},
            {name: "Dawn M.", homeTown: "Laguna Hills, CA", memberOf: "AA"},
            {name: "Steve M.", homeTown: "Laguna Hills, CA", memberOf: "AA"}
        ]
    },
    {
        year: "2022",
        speakers: [
            {name: "Jimmy D.", homeTown: "Dallas, TX", memberOf: "AA"},
            {name: "Amy M.", homeTown: "Aurora, CO", memberOf: "AA"},
            {name: "Anu B.", homeTown: "Matthews, NC", memberOf: "Al-Anon"},
            {name: "Georgia B.", homeTown: "Montrose, CA", memberOf: "AA"},
            {name: "Larry T.", homeTown: "Long Beach, CA", memberOf: "AA"}
        ]
    },
    {
        year: "2021",
        speakers: [
            {name: "David B.", homeTown: "Tulsa, OK", memberOf: "AA"},
            {name: "Susan B.", homeTown: "Tulsa, OK", memberOf: "Al-Anon"},
            {name: "Tina H.", homeTown: "Waukesha, WI", memberOf: "AA"},
            {name: "Cari B.", homeTown: "Sheridan, WY", memberOf: "AA"},
            {name: "John S.", homeTown: "Helotes, TX", memberOf: "AA"}
        ]
    },
    {
        year: "2020",
        speakers: [
            {name: "No Conference", homeTown: "", memberOf: ""},
            {name: "", homeTown: "", memberOf: ""},
            {name: "", homeTown: "", memberOf: ""},
            {name: "", homeTown: "", memberOf: ""},
            {name: "", homeTown: "", memberOf: ""}
        ]
    },
    {
        year: "2019",
        speakers: [
            {name: "Steve C.", homeTown: "Shawnee, OK", memberOf: "AA"},
            {name: "Kelley C.", homeTown: "Shawnee, OK", memberOf: "Al-Anon"},
            {name: "Shawn C.", homeTown: "Georgetown, TX", memberOf: "AA"},
            {name: "Mike P.", homeTown: "Bacliff, TX", memberOf: "AA"},
            {name: "Dawn B.", homeTown: "Houstong, TX", memberOf: "AA"}
        ]
    },
    {
        year: "2018",
        speakers: [
            {name: "Brendan D.", homeTown: "Burlington, WA", memberOf: "AA"},
            {name: "Diane A.", homeTown: "Nashville, TN", memberOf: "Al-Anon"},
            {name: "Mike A.", homeTown: "Nashville, TN", memberOf: "AA"},
            {name: "Jennifer K.", homeTown: "Plano, TX", memberOf: "AA"},
            {name: "Andrew I.", homeTown: "Anchorage, AK", memberOf: "AA"}
        ]
    },
    {
        year: "2017",
        speakers: [
            {name: "Bruce E.", homeTown: "Claire, WI", memberOf: "AA"},
            {name: "Dianne E.", homeTown: "Norman, OK", memberOf: "Al-Anon"},
            {name: "Heide M.", homeTown: "Rochelle, TX", memberOf: "AA"},
            {name: "Jim M.", homeTown: "Rochelle, TX", memberOf: "AA"},
            {name: "Misoon", homeTown: "Sarasota, FL", memberOf: "AA"}
        ]
    },
    {
        year: "2016",
        speakers: [
            {name: "Vivian, W.", homeTown: "Okatie, SC", memberOf: "AA"},
            {name: "Corrie L.", homeTown: "Wetumpka, AL", memberOf: "Al-Anon"},
            {name: "Ken L.", homeTown: "Wetumpka, AL", memberOf: "AA"},
            {name: "Mari G.", homeTown: "Ontario, Canada", memberOf: "AA"},
            {name: "Jeff V.", homeTown: "Fargo, ND", memberOf: "AA"}
        ]
    },
    {
        year: "2015",
        speakers: [
            {name: "Keith D.", homeTown: "Dallas, TX", memberOf: "AA"},
            {name: "Rick J.", homeTown: "Oakville, Ontario, Canada", memberOf: "Al-Anon"},
            {name: "Bobby C.", homeTown: "Philadelphia, PA", memberOf: "AA"},
            {name: "Debbie D.", homeTown: "San Francisco CA", memberOf: "AA"},
            {name: "Paul McQ.", homeTown: "Oceanside, NY", memberOf: "AA"}
        ]
    },
    {
        year: "2014",
        speakers: [
            {name: "Beth H.", homeTown: "Cary, NC", memberOf: "AA"},
            {name: "Larcine G.", homeTown: "Hawthorn, CA", memberOf: "Al-Anon"},
            {name: "Chuck H.", homeTown: "Cary, NC", memberOf: "AA"},
            {name: "Doug R.", homeTown: "Tujunga, CA", memberOf: "AA"},
            {name: "Carla R.", homeTown: "Tujunga, CA", memberOf: "AA"}
        ]
    },
    {
        year: "2013",
        speakers: [
            {name: "Doug O.", homeTown: "Des Moines, IA", memberOf: "AA"},
            {name: "Leann B.", homeTown: "Norman, OK", memberOf: "Al-Anon"},
            {name: "Jesse W.", homeTown: "Norman, OK", memberOf: "AA"},
            {name: "Rich B.", homeTown: "Ocean City, MD", memberOf: "AA"},
            {name: "Kathy W.", homeTown: "Norman, OK", memberOf: "AA"}
        ]
    },
    {
        year: "2012",
        speakers: [
            {name: "Mallina W.", homeTown: "Ferndale, WA", memberOf: "AA"},
            {name: "Vannoy S.", homeTown: "Dallas, TX", memberOf: "Al-Anon"},
            {name: "Carla M.", homeTown: "Tujunga, CA", memberOf: "AA"},
            {name: "Clancy I.", homeTown: "Los Angeles, CA", memberOf: "AA"},
            {name: "Tom I.", homeTown: "Southern Pines, NC", memberOf: "AA"}
        ]
    },
    {
        year: "2011",
        speakers: [
            {name: "Garry P.", homeTown: "Omaha, NE", memberOf: "AA"},
            {name: "Randy S.", homeTown: "Wasilla, AK", memberOf: "Al-Anon"},
            {name: "Teresa K.", homeTown: "Hopkins, MN", memberOf: "AA"},
            {name: "Curt K.", homeTown: "Hopkins, MN", memberOf: "AA"},
            {name: "Mildred F.", homeTown: "Toronto, Ontario", memberOf: "AA"}
        ]
    },
    {
        year: "2010",
        speakers: [
            {name: "Butch M.", homeTown: "Barrie, Ontario", memberOf: "AA"},
            {name: "Sam J.", homeTown: "Dallas, TX", memberOf: "Al-Anon"},
            {name: "Larry J.", homeTown: "Dallas, TX", memberOf: "AA"},
            {name: "Jack C.", homeTown: "Hagerstown, MD", memberOf: "AA"},
            {name: "Deb G.", homeTown: "Yucca Valley, CA", memberOf: "AA"}
        ]
    },
    {
        year: "2009",
        speakers: [
            {name: "Kenna M.", homeTown: "S. Pasadena, CA", memberOf: "AA"},
            {name: "Mike R.", homeTown: "Chugiak, AK", memberOf: "AA"},
            {name: "Stephanie B.", homeTown: "Granite Shoals, TX", memberOf: "Al-Anon"},
            {name: "Danny B.", homeTown: "Houston, TX", memberOf: "AA"},
            {name: "Pat Y.", homeTown: "Pasadena, CA", memberOf: "AA"}
        ]
    },
    {
        year: "2008",
        speakers: [
            {name: "Larry T.", homeTown: "Lakewood, CA", memberOf: "AA"},
            {name: "Ralph W.", homeTown: "Los Angeles, CA", memberOf: "AA"},
            {name: "Howard P.", homeTown: "Gilbert, AZ", memberOf: "AA"},
            {name: "Pat P.", homeTown: "Gilbert, AZ", memberOf: "Al-Anon"},
            {name: "Michael Ann A.", homeTown: "Big Lake, AK", memberOf: "AA"}
        ]
    },
    {
        year: "2007",
        speakers: [
            {name: "John B.", homeTown: "Portland, OR", memberOf: "AA"},
            {name: "Cindy, S.", homeTown: "Billings, MT", memberOf: "Al-Anon"},
            {name: "Andrew I.", homeTown: "Anchorage, AK", memberOf: "AA"},
            {name: "Gerry M.", homeTown: "Hayden, ID", memberOf: "AA"},
            {name: "Billy S.", homeTown: "Las Vegas, NV", memberOf: "AA"}
        ]
    },
    {
        year: "2006",
        speakers: [
            {name: "Jeanette M.", homeTown: "Little Elm, TX", memberOf: "AA"},
            {name: "Samuel V.", homeTown: "Iowa City, IA", memberOf: "Al-Anon"},
            {name: "Roger B.", homeTown: "St. Louis Park, MN", memberOf: "AA"},
            {name: "Bill S.", homeTown: "Roswell, GA", memberOf: "AA"},
            {name: "Nancy B.", homeTown: "Denton, TX", memberOf: "AA"}
        ]
    },
    {
        year: "2005",
        speakers: [
            {name: "Sterling H.", homeTown: "Omaha, NE", memberOf: "AA"},
            {name: "Lynda B.", homeTown: "St. Paul, MN", memberOf: "Al-Anon"},
            {name: "Bob D.", homeTown: "Las Vegas, NV", memberOf: "AA"},
            {name: "Tim S.", homeTown: "Sykesville, MD", memberOf: "AA"},
            {name: "Bob B.", homeTown: "St. Paul, MN", memberOf: "AA"}
        ]
    },
]

export { pastConferences }