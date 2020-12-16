# Example

Let’s consider the following use case:

Cadabra Inc is a major online retailer. They have noticed that a lot of their users stop their navigation after adding items to their carts, and would like to try and have them complete their purchases.

Basically, the automation should do the following:

* add to the automation users who have added an item to their cart
* wait a few hours \(let's say 2\) in case these users complete their order. If they do, then these users should exit the scenario before the next action
* send these users a reminder email, or an email with a promotion code, in order to entice them into completing their order

Here is how we will do this with automations:

![](https://lh3.googleusercontent.com/GT0-ryyqq2QAYxH1QSPFmpAR3cvPEoi5cn-WPZWIqSxoJffIhcNdNr3wKrhWNAowiJmj1ro2b9j9MWvtVpkgf3ph2XDQQrui3Qbr6MviqIWy1-k_Ymk8zLEi90-pdYrGVG6-1RaZ)

* Entry into the automation is triggered by a "$basket\_view" event
* Wait node is configured to 2 hours
* Send email node is configured to send a reminder email
* An exit condition is configured to make users leave the automation if a "$transaction\_confirmed" event is received

