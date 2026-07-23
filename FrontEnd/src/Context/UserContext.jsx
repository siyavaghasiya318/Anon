import { createContext, useEffect, useState } from "react";
import axios, { create } from "axios"
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { MdTry } from "react-icons/md";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {


    // const API = 'https://anon-ksvj.onrender.com/api'
    const API = 'http://localhost:5000/api'



    const [Isopen, SetIsopen] = useState(false)
    const [islogin, Setislogin] = useState("login")
    const [Auth, SetAuth] = useState(false)


    // User Address
    const [addressForm, setAddressForm] = useState({
        name: "",
        phoneno: "",
        streetaddress: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
        lable: "home",
        isDefault: false
    })
    const [showAddress, setShowAddress] = useState([])
    const [isaddress, Setisaddress] = useState(false)
    const [selectedPage, SetSelectedPage] = useState("dashboard")
    // navbar
    const [search, setsearch] = useState("")
    

    const [Profile, SetProfile] = useState(null)

    // admin
    const [showUsers, SetshowUsers] = useState([])
    const [AllUsers, SetAllUsers] = useState([])
    const [allSellers, SetAllSellers] = useState([])

    // img (varient)
    const [prev, Setprev] = useState([])
    const [backendPrevImg, SetBackendPrevImg] = useState([])

    // description img
    const [Descriptionimg, setDescriptionimg] = useState([])
    const [DesBackendImg, setDesBackendImg] = useState([])

    // img(main )
    const [ProductImg, SetProductImg] = useState([])
    const [ProductBackendImg, SetProductBackendImg] = useState([])


    // sellers
    const [GetSellerdata, setGetsellerdata] = useState([])
    const [getSellerProducts, setGetSellerProducts] = useState([])


    // getproducts
    const [getProducts, setGetProducts] = useState([])

    // tag and badges
    const [tag, setTag] = useState("");
    const [badge, setBadge] = useState("");

    // Addproduct from
    const [submitLoading, setSubmitLoading] = useState(false)


    // cart
    const [fetchCart, setFetchCart] = useState([])
    const [calculate, setCalculate] = useState([])
    const [selectedSize, setselectedSize] = useState(null)

    // wishlist
     const[wishlist,setWishlist] = useState([])

    // checkout
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [selectedAddressid, setSelectedAddress] = useState(null)
    const [showAddressModal, setShowAddressModal] = useState(false);



    // orders
    const [fetchOrder, setfetchOrder] = useState([])
    const [showAllOrders, setShowAllOrders] = useState([])

    // search 
    const searchHandleChange = (e) => {
        const value = e.target.value;
        setsearch(value);
            if (value.trim() === "") {
              navigate("/");
                return
            }
            else {
              navigate("/category")
            }
      }

    const navigate = useNavigate()

    const imgref = useRef(null)

    const [UserForm, SetUserForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [passwordData, setPasswordData] = useState({
        currentpassword: "",
        newpassword: ""
    });

    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [password, setpassword] = useState("")
    const [select, setSelect] = useState("login")


    const emailsent = async () => {
        try {
            const { data } = await axios.post(`${API}/user/email`, { email })
            if (data.success) {
                setSelect("otpGenerate")
            }

        } catch (error) {
            console.log("emailsent error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }
    const sendOtp = async () => {
        try {
            const { data } = await axios.post(`${API}/user/otp`, { email, otp }, { withCredentials: true })
            console.log(data, "otp");
            if (data.success) {
                setSelect("resetPassword")
            }

        } catch (error) {
            console.log("sendOtp error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }

    const ResetPassword = async () => {
        try {
            const { data } = await axios.post(`${API}/user/resetpassword`, { email, password }, { withCredentials: true })
            console.log(data, "otp");
            if (data.success) {
                toast.success(data.message)
                setSelect("login")
            }
            toast.success(data.message)
        } catch (error) {
            console.log("sendOtp error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }



    const [Seller, SetSeller] = useState({
        shopname: "",
        gstnum: "",
        phonenum: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    })

    const [productFrom, setProductForm] = useState({
        title: "",
        category: "",
        subcategory: "",
        brand: "",
        gender: "",
        size: [],
        shortdescription: "",

        // price
        price: "",
        discountprice: "",
        originaldiscountprice: "",
        livestock: "",

        // tag and badges
        tags: [],
        badges: [],


        // specifications: [],
        // specification
        specificationname: "",
        specificationvalue: "",

        // varient
        color: "",
        colorcode: "",
        stock: "",
        varientsize: [],

        // text box
        blocktitle: "",
        description: "",
        imgtitle: "",

        // Logistics & Policy
        warrenty: "",
        deliverytime: "",

        // Seo
        metatitle: "",
        metadescription: ""

    })

    // User Address

    const UserAddChange = (e) => {
        const { name, value } = e.target
        setAddressForm({
            ...addressForm,
            [name]: value
        })

    }




    const UserAddressSubmit = async (e) => {
        e.preventDefault()

        try {

            const { data } = await axios.post(`${API}/useraddress/address`, addressForm, { withCredentials: true })
            // console.log(data);

            if (data.success) {
                toast.success(data.message)
                Setisaddress(false)

            }

            setAddressForm({
                name: "",
                phoneno: "",
                streetaddress: "",
                city: "",
                state: "",
                pincode: "",
                landmark: "",
                lable: "",
            })

        } catch (error) {
            console.log("Product submit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }

    const GetAddress = async () => {
        try {
            const { data } = await axios.get(`${API}/useraddress/getaddress`, { withCredentials: true })
            // console.log(data.address);
            setShowAddress(data.address)
            setShowAddressModal(false)
        } catch (error) {
            console.log(" GetAddress error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }

    const RemoveAddress = async (addressid) => {
        try {
            const { data } = await axios.delete(`${API}/useraddress/delete`, { data: { addressid }, withCredentials: true })
            // console.log(data);
            if (data.success) {
                GetAddress();
                toast.success(data.message)
            }
        } catch (error) {
            console.log("RemoveAddress error", error);
        }
    }



    // product handle
    const ProductHandleChange = (e) => {
        const { name, value } = e.target
        setProductForm({
            ...productFrom,
            [name]: value
        })


    }
    const HandleSizeChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setProductForm((prev) => ({
                ...prev,
                size: [...prev.size, value]
            }));
        } else {
            setProductForm((prev) => ({
                ...prev,
                size: prev.size.filter((item) => item !== value)
            }));
        }
    };
    const varientSizeChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setProductForm((prev) => ({
                ...prev,
                varientsize: [...prev.varientsize, value]
            }));
        } else {
            setProductForm((prev) => ({
                ...prev,
                varientsize: prev.varientsize.filter((item) => item !== value)
            }));
        }
    };

    const HandleColorPicker = (e) => {
        setProductForm((prev) => ({
            ...prev,
            colorcode: e.target.value
        }));
    };

    const HandleColorCode = (e) => {
        setProductForm((prev) => ({
            ...prev,
            colorcode: e.target.value
        }));
    };

    const HandleColorName = (e) => {
        const colorName = e.target.value;

        setProductForm((prev) => ({
            ...prev,
            color: colorName,
            colorcode: colorName
        }));
    };
    const AddTag = () => {

        if (!tag.trim()) return;

        setProductForm((prev) => ({
            ...prev,
            tags: [...prev.tags, tag]
        }));

        setTag("");

    }

    const Addbadge = () => {

        if (!badge.trim()) return;

        setProductForm((prev) => ({
            ...prev,
            badges: [...prev.badges, badge]
        }));

        setTag("");

    }


    // const RemoveTag = (index) => {
    //     setProductForm((prev) => ({
    //         ...prev,
    //         tags: prev.tags.filter((_, i) => i !== index)
    //     }));
    // };


    const ProductSubmit = async (e) => {
        e.preventDefault()
        // console.log("product submit", productFrom);


        const ProductData = new FormData()


        Object.entries(productFrom).forEach(([key, value]) => {
            if (key !== "size") {
                ProductData.append(key, value)
            }
        })


        productFrom.tags.forEach((item) => {
            ProductData.append("tags", item)
        })

        productFrom.badges.forEach((item) => {
            ProductData.append("badges", item)
        })


        productFrom.size.forEach((item) => {
            ProductData.append("size", item);
        });

        backendPrevImg.map((img) => {
            ProductData.append("verimage", img)
        })

        DesBackendImg.map((img) => {
            ProductData.append("descimage", img)
        })

        ProductBackendImg.map((img) => {
            ProductData.append("images", img)
        })

        try {

            const { data } = await axios.post(`${API}/product/addproduct`, ProductData, { withCredentials: true })
            if (data.success) {
                toast.success(data.message)
                setSubmitLoading(flase)
            }

            // setProductForm({
            //     title: "",
            //     category: "",
            //     subcategory: "",
            //     brand: "",
            //     gender: "",
            //     shortdescription: "",
            //     size: [],

            //     // price
            //     price: "",
            //     discountprice: "",
            //     originaldiscountprice: "",
            //     livestock: "",

            //     // tag and badges
            //     tags: [],
            //     badges: [],

            //     // specification
            //     specificationname: "",

            //     // varient
            //     color: "",
            //     colorcode: "",
            //     stock: "",
            //     varientsize: [],

            //     // text box
            //     blocktitle: "",
            //     description: "",
            //     imgtitle: "",

            //     // Logistics & Policy
            //     warrenty: "",
            //     deliverytime: "",

            //     // Seo
            //     metatitle: "",
            //     seotitle: ""
            // })



        } catch (error) {
            console.log("Product submit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }

    }




    // img upload
    // varient img
    const imgUpdate = (e) => {

        const file = e.target.files[0]
        const imgobj = URL.createObjectURL(file)
        Setprev([...prev, imgobj])
        SetBackendPrevImg([...backendPrevImg, file])

    }

    // des img
    const DesImg = (e) => {
        const file = e.target.files[0]
        const imgobj = URL.createObjectURL(file)
        setDescriptionimg([...Descriptionimg, imgobj])
        setDesBackendImg([...DesBackendImg, file])
    }

    // main img
    const imgChange = (e) => {
        const file = e.target.files[0]
        const imgobj = URL.createObjectURL(file)
        SetProductImg([...ProductImg, imgobj])
        SetProductBackendImg([...ProductBackendImg, file])
    }



    const Removeimg = (index) => {
        const newarr = [...ProductImg]

        newarr.splice(index, 1)
        SetProductImg(newarr)
    }

    const RemoveVarientimg = (index) => {
        const newarr = [...prev]

        newarr.splice(index, 1)
        Setprev(newarr)
    }

    const RemoveDesImg = (index) => {
        const newarr = [...Descriptionimg]
        newarr.splice(index, 1)
        setDescriptionimg(newarr)
    }

    const GetProducts = async () => {
        try {
            const { data } = await axios.get(`${API}/product/getproducts`, { withCredentials: true })
            setGetProducts(data.product)

        } catch (error) {
            console.log("getproducts error", error);

        }
    }

    // const [data, Setdata] = useState("All")

    // const newdata = data === "beauty"
    //     ? getProducts
    //     : getProducts.filter((item) =>
    //         item?.category.toLowerCase() === data.toLowerCase()
    //     )
    //     console.log(data);




    // New Password
    const HandlePassword = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
        console.log(passwordData);

    };

    const NewPassword = async () => {
        try {
            const { data } = await axios.put(`${API}/user/changepassword`, passwordData, { withCredentials: true })

            if (data.success) {
                toast.success(data.message);
                setPasswordData({
                    currentpassword: "",
                    newpassword: ""
                })
                SetSelectedPage("dashboard")
            }
        } catch (error) {
            console.log("NewPassword error", error.response.data.message);
            toast.error(error?.response?.data?.message);
        }
    }

    //  userform
    const Handlechange = (e) => {
        const { name, value } = e.target

        SetUserForm({
            ...UserForm,
            [name]: value
        }
        )

    }
    const FromSubmit = async (e) => {
        e.preventDefault()

        try {


            const { data } = await axios.post(`${API}/user/${islogin}`, UserForm, { withCredentials: true })
            // console.log(data);

            if (data.success) {
                toast.success(data.message)
                GetProfile()
                GetCartProduct()
                GetAllUsers()
                GetSellerdetails()
                UserAddressSubmit()
                SetIsopen(false)
                GetAllOrders()
                GetSellerProducts()
                GetAllSellers()
                GetAddress()
                Getwishlist()
            }

            SetUserForm({
                name: "",
                email: "",
                password: ""
            })
        } catch (error) {
            console.log("handle Submit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }

    }

    const GetProfile = async () => {
        try {
            const { data } = await axios.get(`${API}/user/getprofile`, { withCredentials: true })

            if (data.success) {
                SetProfile(data.user)
            }

        } catch (error) {
            console.log("getprofile error:", error.response.data.message);
        }

    }



    const UpdateUser = async (item) => {
        try {
            const { data } = await axios.put(`${API}/user/updateuser`, { withCredentials: true })
            // console.log(data);
            SetUserForm({
                name: item.name,
                email: item.email,
                password: item.password
            })

        } catch (error) {
            console.log("UpdateUser error", error.response.data.message);
        }
    }


    const GetCartProduct = async () => {
        try {

            const { data } = await axios.get(
                `${API}/cart/getcart`,
                { withCredentials: true }
            );

            if (!data.cart || data.cart.length === 0) {

                setFetchCart([]);
                setCalculate({});

                return;
            }

            const cart = data.cart[0];

            const cartItem = cart.item.map((item) => {

                const prod = item.productid || {};

                return {
                    ...prod,
                    cartId: cart._id,
                    id: prod._id,
                    quentity: item.quentity,
                    size: item.size,
                    totalPrice: item.totalPrice
                };

            });

            setCalculate(cart);
            setFetchCart(cartItem);


        } catch (error) {

            console.log(
                "GetCartProduct error:",
                error?.response?.data?.message
            );

        }
    };


    const UserLogout = async () => {
        try {
            const { data } = await axios.post(`${API}/user/logout`, {}, { withCredentials: true })
            // console.log(data);

            SetshowUsers(data.users)
            setFetchCart([])
            setWishlist([])
            if (data.success) {
                SetProfile(null)
                navigate("/")
                toast.success(data.message)
            }

        } catch (error) {
            console.log("logout", error);
        }
    }

    const Userdelete = async (item) => {
        try {
            const { data } = await axios.delete(`${API}/user/deleteuser`, { withCredentials: true })
            // console.log(data);

        } catch (error) {
            console.log("UserDelete error", error);
        }
    }

    // seller detail

    const HandleSeller = (e) => {
        const { name, value } = e.target
        SetSeller({
            ...Seller,
            [name]: value
        })

    }

    const SellerSubmit = async (e) => {
        e.preventDefault()
        // console.log(Seller);

        try {

            const { data } = await axios.post(`${API}/seller/registerseller`, Seller, { withCredentials: true })

            if (data.success) {
                navigate('/seller')
                SetProfile(data.user);
                GetProfile()
                GetAllOrders()
                GetSellerProducts()
            }

            SetSeller({
                shopname: "",
                gstnum: "",
                phonenum: "",
                address: "",
                city: "",
                state: "",
                pincode: ""
            })

        } catch (error) {
            console.log("BecomeSeller error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }


    const GetSellerdetails = async () => {
        try {
            const { data } = await axios.get(`${API}/seller/getseller`, { withCredentials: true })


            if (data.success) {
                // console.log(data.user);
                setGetsellerdata(data.user)
            }

        } catch (error) {
            console.log("getSellerDetail error:", error.response.data.message);
        }
    }



    const GetAllUsers = async () => {
        try {
            const { data } = await axios.get(`${API}/user/getusers`, { withCredentials: true })
            SetAllUsers(data.users)

        } catch (error) {
            console.log("getallusers error:", error.response.data.message);
        }
    }

    const GetAllSellers = async () => {
        try {
            const { data } = await axios.get(`${API}/user/getsellers`, { withCredentials: true })
            SetAllSellers(data.users)

        } catch (error) {
            console.log("getallusers error:", error.response.data.message);
        }
    }



    // const[productId,setProductId] = useState()

    // const productid = (id) => {
    //     console.log(id);
    //     setProductId(id)

    // }

    const CartProduct = async (productid, size) => {

        try {
            const { data } = await axios.post(`${API}/cart/addcart`, { productid, size }, { withCredentials: true })

            GetCartProduct()
            if (data.success) {
                GetCartProduct()    
                navigate("/cart")
                setselectedSize(null)
            }

        } catch (error) {
            if (!size) {
                toast.error(error?.response?.data?.message);
            }
            console.log("Cartproduct error:", error.response.data.message);
        }

    }

    // const GetCartProduct = async() => {
    //     try {
    //         const { data } = await axios.get(`${API}/cart/getcart", { withCredentials: true })
    //         // console.log(data.cart);

    //         const cartItem = data.cart[0].item.map((item) => {
    //             const prod = item?.productid || {}
    //             return (
    //                 {
    //                     ...prod,
    //                     cartId: data.cart[0]._id,
    //                     id: prod?._id,
    //                     quentity: item?.quentity,
    //                     size: item?.size,
    //                     totalPrice: item?.totalPrice
    //                 }
    //             )
    //         })
    //         setCalculate(data.cart[0])

    //         setFetchCart(cartItem)

    //     } catch (error) {
    //         console.log("GetCartProduct error:", error);
    //     }
    // }

    

    const DecQuentity = async (productid, size) => {
        try {
            const { data } = await axios.post(`${API}/cart/decrease`, { productid, size }, { withCredentials: true })

            if (data.success) {
                GetCartProduct()
            }


        } catch (error) {
            console.log("DecQuentity error:", error.response.data.message);
        }
    }


    //order  
    const Checkoutdata = async () => {
        console.log("Function called");
        try {
            
            
            const { data } = await axios.post(`${API}/order/checkout`, { addressId: selectedAddressid, paymentMethod, }, { withCredentials: true })
            if (data.success) {
                GetMyOrderItem()
                GetCartProduct()
            }

            window.location.href = data.url;
        } catch (error) {
            console.log("Checkoutdata error", error?.response?.data?.message)

            toast.error(error?.response?.data?.message || error.message || "Something went wrong")
        }
    }

    const GetMyOrderItem = async () => {
        try {
            const { data } = await axios.get(`${API}/order/myorders`, { withCredentials: true })
            // console.log("myorders", data.orders);

            setfetchOrder(data.orders)

        } catch (error) {
            console.log("myorders error", error?.response?.data?.message)
        }
    }

    const GetAllOrders = async () => {
        try {
            const { data } = await axios.get(`${API}/order/getorder`, { withCredentials: true })
            setShowAllOrders(data.orderdata)

        } catch (error) {
            console.log("GetAllOrders error", error?.response?.data?.message)
        }
    }

    const UpdateOrderStatus = async (orderid, orderstatus) => {
        try {
            const { data } = await axios.put(`${API}/order/update`, { orderid, orderstatus }, { withCredentials: true })
            if (data.success) {
                GetAllOrders()
            }
        } catch (error) {
            console.log("UpdateOrderStatus error", error?.response?.data?.message)
        }
    }


    const GetSellerProducts = async () => {
        try {
            const { data } = await axios.get(`${API}/product/products`, { withCredentials: true })
            setGetSellerProducts(data.products)

            console.log("GetSellerProducts", data.products);

        } catch (error) {
            console.log("GetSellerProducts error", error?.response?.data?.message)
        }
    }

    const WishlistItem = async(productid) => {
        try {
            const{data} = await axios.post(`${API}/wishlist/wishlistitem/${productid}`, {} ,{ withCredentials: true })   
            Getwishlist()
            toast.success(data.message)
        } catch (error) {
            console.log("WishlistItem error", error?.response?.data?.message)
        }
    }
    const[heart,setHeart] = useState("")

    const Getwishlist = async() => {
        try {
            const{data} = await axios.get(`${API}/wishlist/getwishlist`, { withCredentials: true })
            setWishlist(data.wishlistitem)
        } catch (error) {
            console.log("GetWishlistItem error", error?.response?.data?.message)
        }
    }
   

    
    

    useEffect(() => {
        GetProfile()
        
        GetSellerdetails()
        GetAllOrders()
        GetSellerProducts()



        GetAllUsers()
        GetAllSellers()

        GetProducts()
        GetCartProduct()
        GetAddress()
        GetMyOrderItem()
        Getwishlist()


    }, [])




    return (
        <UserContext.Provider value={{
            ProductSubmit, tag,
            setTag,
            badge,
            setBadge,selectedPage, SetSelectedPage,
            // navbar
            search, setsearch,searchHandleChange,
            // Reset(NewPassword)
            HandlePassword, passwordData, setPasswordData, NewPassword,
            // OTP
            email, setEmail, select, setSelect, emailsent, setOtp, sendOtp, ResetPassword, setpassword,
            // UserAddres 
            UserAddChange, addressForm, setAddressForm, UserAddressSubmit, showAddress, RemoveAddress, selectedAddressid,
            // 
            WishlistItem,
            // cart
            setselectedSize, selectedSize,
            // wishlist
            wishlist,setWishlist,
            // checkout
            paymentMethod, setPaymentMethod, setSelectedAddress, Checkoutdata, showAddressModal, setShowAddressModal,
            // order
            fetchOrder, showAllOrders, UpdateOrderStatus,
            // seller
            getSellerProducts, setGetSellerProducts,
            // admin
            allSellers, SetAllSellers,
            AddTag, imgref, fetchCart, Setisaddress, isaddress, DecQuentity, calculate, getProducts, CartProduct, GetCartProduct, CartProduct, DesImg, Addbadge, submitLoading, setSubmitLoading, HandleSizeChange, varientSizeChange, HandleColorName, HandleColorPicker, HandleColorCode, GetSellerdata, RemoveDesImg, Descriptionimg, ProductHandleChange, productFrom, Profile, prev, Removeimg, RemoveVarientimg, ProductImg, imgUpdate, imgChange, imgref, AllUsers, Userdelete, UpdateUser, navigate, UserLogout, SetIsopen, SetProfile, Isopen, UserForm, Handlechange, FromSubmit, islogin, Setislogin, HandleSeller, Seller, SellerSubmit
        }}>
            {children}
        </UserContext.Provider>
    )
}