export default source => {
  console.log(source.asset._ref);
  const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

  const decodeAssetId = id =&gt; {
    const [, assetId, dimensions, format] = pattern.exec(id)
    const [width, height] = dimensions.split("x").map(v =&gt; parseInt(v, 10))

    return {
      assetId,
      dimensions: { width, height },
      format,
    }
  }
}
