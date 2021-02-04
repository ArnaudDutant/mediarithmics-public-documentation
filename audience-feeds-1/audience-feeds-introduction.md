# Audience feeds introduction

### What is it ?

A feed is a connection between mediarithmics and other partners \(such as Google, AppNexus or Facebook\). Feeds are the fastest way to send data/audiences outside mediarithmics environment for clients.

There are two different kind of feeds : 

* Server side  feeds
* Client side feeds

### Server-side feeds

It sends segments to partners in batches, with the following process :

**Initialization**

1. In the navigator, a user activates the feed on a specific segment, with specific options.
2. The feed tries to create the segment in the partner's architecture. On success, feed is marked as **published**.
3. It then tries to add a user to the partner's segment. On success, feed is marked as **active**
4. It goes into **initial loading** state, sending the whole segment to the partner. On success, feed is marked as **live**

**Live**

    5. Segment updates are sent to the partner. Those are differential updates \(who enters the segment, who leaves the segment\). We don't send a complete list of all users in a segment, in order to minimize loads on our architecture but also on the partner's architecture.

### Client-side feeds

Client-side feeds send segments to partners by showing a pixel to your users if they are in the segment. It is either **active** or **paused**.

{% hint style="info" %}
For more technical details about how feeds are built beyond the UI you can [go to this section](https://app.gitbook.com/@mediarithmics/s/developer-guide/guides/getting-started-3).
{% endhint %}

