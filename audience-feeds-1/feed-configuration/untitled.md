# Google DV360

### Authorization

To whitelist mediarithmics in all of your Google accounts, you will need to provide your Google Account Strategist \(with your mics CSM in CC\) with the following info :

* Google Adwords Account : ddp-adwords@mediarithmics.com
* Client Id for Adwords/DDP account : 496-740-7903
* Your Account ID
* Google Product name \(e.g. DBM, DFP, Adwords… \)

Configuration

Select the Google DDP audience feed

![](../../.gitbook/assets/image%20%2852%29.png)

You will have to fill in a number of informations

![](../../.gitbook/assets/image%20%2848%29.png)

* Name **:** the name used to identify this feed. **Warning: This name is only used in the platform, it won't be visible on the external system.**
* Google Product : the Google Product to which you want to synchronize your audience. required 
* Entity ID : the ID of your company account on the target Google Product in number format. Note: if AdWords, you must remove non-number characters \(ex. : 123-456-7890 becomes 1234567890\).
* Segment Code : specify here the integration code for your UserList. If you specify an existing value, the audience feed will enrich the corresponding UserList. 
* User List Name : the name of the UserList, visible on the target Google product.

And advanced fields

* Description : the description of the UserList that will be seen on the Google Product.
* Description Cookie Life Span \(days\) : the number of days a user's cookie stays in the UserList since its most recent addition to the list. This field must be between 0 and 540 inclusive.

