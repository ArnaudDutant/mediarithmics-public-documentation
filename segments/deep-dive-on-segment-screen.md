# Deep dive on segment screen

### Segment characteristics

Each segment has one name, an ID and a technical name. 

The name allows you the identify the segment in the segment tab. Choose it wisely to understand what it refers. A naming convention and creation date can be used to help your teams identify the segments they need.

the technical name can be customized by the client. Mainly used to store the Id of the segment in an external system. The technical name can be used as a Segment Identifiers in the Segment APIs

A technical name can't be referenced to more than one audience segment metric. It is unique.

It is also possible to add a segment description and a default lifetime.  A lifetime defines the time a userpoint stays in the segment \(for example, if you set a default lifetime to 2 months, all userpoint that enters the segment will go out of it after 2 months\).

For segments of type “USER\_QUERY”, you can choose for the segment to be persisted or no. 

Persisted segment are usable for segments activated in campaigns whereas non persisted are used for analytics \(when you just need to calculate the number of user points in that segment\).

### Segment view

Each segment has its own banner showing the main information such as the total number of user point, of which with a User Account, a display/mobile cookie and/or email.

![](https://lh5.googleusercontent.com/IDDvXC15xhSA6SYOdapRdQOsdWfC8kPQpn4VWr3ziKP9M2528GaZpKjhbRvIfkGDk_kdFY2tulEkXH1xkk7-qlg7BErfa8uhbt-0yAv77EsCG7otuC6f7rT7U4i67w)

 The value of the metric is calculated in real time for each segment and is also saved in real time to offer an historic view of its values.

Hence the number of any metrics will always be lower or equal to the number of User Points in the segment.

Sub menus allows for additional information.

### Overview

The overview allows to see the evolution in time of the number of User Points, accounts, emails, display cookies ou mobile cookies ids.

The time scale is adjustable.

![](https://lh3.googleusercontent.com/ndlTf9t3b194QGck2h9xCTbr-DznceYpw1Uod6d8l61LiErCbnw7_JCntTZOGlZaMA82Ohl02wCBOb9LbpCTRcUkXKfJjZjWVykuxK7_PeFV_4lvYYSf9YT6ue7Kjg)

### Addition Deletion 

The addition deletion tab allows to see the number of UserPoints added or deleted from the segment during a time scale.

The time scale is adjustable.

![](https://lh5.googleusercontent.com/MN5DyJ7xnJkCfYrXKmvokMRz1nKnqu-7IY45rvD3O4zvSTA_6d7yBgp7XYFRN8iFMhyRHEzvp6-ucVSqJh17vIaFizkHa9M-hBP2j_LFjjOy00P7HFhwO665gQgdDQ)

### Overlap

To use the overlap feature, you will first need to create an overlap analysis using the button

![](https://lh6.googleusercontent.com/zkTj0PTb0MbhzysgA6b0St45bq3F3minD8ZT2V44igLiwJCuIDHeTgj9yoLMcF6SHebG5gfcWnMJ2v_UKUCtHKNBKQ4r5g1zJPQHJdxQNt3_rcEAEfO5_HLD_PCd_g)

The overlap feature allows you to see the similarities between different segments. By creating an overlap analysis, you will see the 20 segments that share the largest number of user points with the one the overlap analysis was made on in the form of a bar chart.

The segment are sorted by percentage of similar User Points compared to the total number of user points of the segment the overlap analysis was made on.

By putting your mouse on a bar, you can witness the full name of the chosen segment and the percentage of similar user points.

The bar chart is frozen using the data at the time the overlap analysis was done \(time info is available in the top right hand corner of the chart\). To have an updated bar chart, you must press the refresh button.

![](https://lh3.googleusercontent.com/WcFLBGxJ5LafE40ssTrOViqIEKbMbc2lINe4G63NFH5hP2gbd50c9nIGj72lhmH74CP8wgVK38vwvgptcbg2wP-KOxqJp4EFD-P9wvpq33hOhpepL-LTxFo5BFttZg)

### User List

This sub tab is only available for segment of User\_List type, that were created through imports.

The import status allows you to witness if the list was effectively imported, the number of user points that were treated from the csv file and the number of user points that was actually imported.

![](https://lh4.googleusercontent.com/g5CjQYBDsKVe9HmCfoZP4pzbo3RENY8HymgLWwAFk6vfrF0kr_siZKNJm3Rx8TTxp_CKBeV2uhNPPK9j99Ly79fJlaZ5MNNMw3MR9iNrew9MU18kbxymLgJ3StEAtA)

