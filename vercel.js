module.exports = {
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "x-robots-tag",
          value: "noindex",
        },
      ],
    },
  ],
}
