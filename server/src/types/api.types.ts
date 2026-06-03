

type BiorxivSchema = {
    "messages": {
        "status": string,
        "category": string
    }[],
    "collection": {
      "title": string,
      "authors": string,
      "author_corresponding": string,
      "author_corresponding_institution": string,
      "doi": string,
      "date": string,
      "version": string,
      "type": string,
      "license": string,
      "category": string,
      "jatsxml": string,
      "abstract": string,
      "funder": string,
      "published": string,
      "server": "bioRxiv"
    }[]
}

export type {
    BiorxivSchema
}