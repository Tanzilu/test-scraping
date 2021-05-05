const ENDPOINT = "https://gql.tokopedia.com/";

const OPERATION_NAME = "DynamicSearchProductQuery"

const NORMALIZED_SEARCH_PARAMETER_KEY = {
	orderBy: "ob",
	goldMerchant: "goldmerchant",
	query: "q",
	rating: "rt",
	priceMin: "pmin",
	priceMax: "pmax",
	searchType: "ep",
    search: "src",
	safeSearch: "safe_search",
    topadsBucket: "topads_bucket",
    uniqueId: "unique_id",
    usePage: "use_page",
};

const QUERY = `query DynamicSearchProductQuery($params: String!, $adParams: String, $includeAds: Boolean = true) {
    ace_search_product_v4(params: $params) 
        {
            header {
                additionalParams
                defaultView
                errorMessage
                keywordProcess
                responseCode
                totalData
                totalDataText
                __typename
            }
            data {
                isQuerySafe
                products {
                    id
                    name
                    ads {
                        id
                        productClickUrl
                        productWishlistUrl
                        productViewUrl
                        __typename
                    }
                    categoryId
                    categoryName
                    childs
                    countReview
                    discountPercentage
                    gaKey
                    imageUrl
                    labelGroups {
                        position
                        title
                        type
                        url
                        __typename
                    }
                    labelGroupVariant {
                        title
                        type
                        typeVariant: type_variant
                        hexColor: hex_color
                        __typename
                    }
                    minOrder
                    originalPrice
                    price
                    rating
                    ratingAverage
                    shop {
                        id
                        name
                        url
                        city
                        isOfficial
                        isPowerBadge
                        __typename
                    }
                    url
                    warehouseID: warehouseIdDefault
                    wishlist
                    sourceEngine: source_engine
                    __typename
                }
                redirection {
                    redirectUrl
                    departmentId
                    __typename
                }
                related {
                    position
                    relatedKeyword
                    otherRelated {
                        keyword
                        url
                        product {
                            id
                            name
                            price
                            imageUrl
                            rating
                            countReview
                            url
                            priceStr
                            shop {
                                city
                                isOfficial
                                isPowerBadge
                                name
                                __typename
                            }
                            ads {
                                id
                                productClickUrl
                                productViewUrl
                                __typename
                            }
                            ratingAverage
                            labelGroups {
                                position
                                type
                                title
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                suggestion {
                    currentKeyword
                    suggestion
                    suggestionCount
                    instead
                    insteadCount
                    text
                    query
                    __typename
                }
                ticker {
                    text
                    query
                    typeId
                    __typename
                }
                __typename
            }
            __typename
        }
    displayAdsV3(displayParams: $adParams) @include(if: $includeAds) 
        {
            data {
                id
                ad_ref_key
                redirect
                sticker_id
                sticker_image
                clickTrackUrl: product_click_url
                shop_click_url
                product {
                    id
                    name
                    wishlist
                    image {
                        s_ecs
                        s_url
                        __typename
                    }
                    url: uri
                    relative_uri
                    price: price_format
                    campaign {
                        original_price
                        discount_percentage
                        __typename
                    }
                    wholeSalePrice: wholesale_price {
                        quantityMin: quantity_min_format
                        quantityMax: quantity_max_format
                        price: price_format
                        __typename
                    }
                    count_talk_format
                    countReview: count_review_format
                    category {
                        id
                        __typename
                    }
                    minOrder: product_minimum_order
                    product_wholesale
                    free_return
                    isNewProduct: product_new_label
                    cashback: product_cashback_rate
                    rating: product_rating
                    ratingAverage: product_rating_format
                    top_label
                    labelGroup: label_group {
                        position
                        type
                        title
                        __typename
                    }
                    category_breadcrumb
                    __typename
                }
                shop {
                    id
                    name
                    domain
                    location
                    city
                    tagline
                    isPowerBadge: gold_shop
                    gold_shop_badge
                    isOfficial: shop_is_official
                    url: uri
                    owner_id
                    is_owner
                    badges {
                        title
                        image_url
                        show
                        __typename
                    }
                    __typename
                }
                applinks
                __typename
            }
                template {
                    isAd: is_ad
                    __typename
                }
                __typename
        }
}`

const ORDER_BY = {
	LOWEST_PRICE: 3,
	HIGHEST_PRICE: 4,
	REVIEW: 5,
	NEWEST: 9,
	MOST_RELEVANT: 23,
};

const SEARCH_TYPE = {
	PRODUCT: "product",
	SHOP: "shop",
};

const CONDITION = {
	NEW: 1,
	USED: 2,
};

module.exports = {QUERY, OPERATION_NAME, ENDPOINT, NORMALIZED_SEARCH_PARAMETER_KEY, ORDER_BY, SEARCH_TYPE, CONDITION}
