import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {  Input, Popconfirm, Table } from "antd";
import { NavLink } from "react-router";
import {PaginationDefault, Status,type IImageType,type IPaginationType, type IPaginationWithSearchType, type StatusType} from "../../config/constants"
import bannerService from "../../service/banner.service";
import { toast } from "sonner";
import {  useEffect, useState } from "react";

export interface IBannerData {
    _id: string,
    link?: string,
    title: string,
    status: StatusType,
    image: IImageType;
}

const BannerListPage = () => {
    const columns = [
        {
            key: "title",
            title: "Title",
            dataIndex: "title"
        },
         {
            key: "link",
            title: "Link",
            dataIndex: "link",
            render: (val:string) => <a href={val} target="_banner">{val}</a>
        },
         {
            key: "statue",
            title: "Status",
            dataIndex: "status",
            render: (val: string) => (val === Status.ACTIVE) ? 
            ( <span className="w-[300px] bg-teal-600/15 p-2 rounded-2xl text-xs font-light text-teal-600">Publish</span>)
             : 
            (<span className=" bg-teal-600/15 p-2 rounded-2xl text-xs font-light text-red-600">Un-Publish</span>)
        },
         {
            key: "image",
            title: "Image",
            dataIndex: "image",
            render: (val: string) => {
                return <img src={val} className="max-w-25"/>
            }
        },
         {
            key: "action",
            title: "#",
            dataIndex: "_id",
            render: (val: string) => {
                return <>
               <div className="flex gap-3">
                <NavLink to={"/admin/banner/"+val} className={"flex bg-teal-700! rounded-full w-8 h-8 items-center transition hover:scale-96 justify-center hover:bg-teal-800!"}>
                 <EditOutlined className="text-white!"/>
                </NavLink>
                <Popconfirm
                title="Are you sure?"
                description="Once delete, the content cannot be reverted back!!"
                onConfirm={()=>{
                   ondeleteConfirm(val)
                }}
                okText="Confirm!"
                
                >
                
                <button  className={"flex hover:cursor-pointer bg-red-700! rounded-full w-8 h-8 transition hover:scale-96 items-center justify-center hover:bg-red-800!"}>
                 <DeleteOutlined className="text-white!"/>
                </button>
                </Popconfirm>
                
               </div>
                </>
            }
        }
    ];
    const [loading, setLoading] = useState<boolean>(true);
     const [search, setSearch] = useState<string>('')
    const [data, setData] = useState<Array<IBannerData>>([]);
    const [pagination, setPagination] =  useState<IPaginationType>({
        current: PaginationDefault.current,
        pageSize: PaginationDefault.limit,
        total: PaginationDefault.total,
      });
 


    const getBannerList = async({page= PaginationDefault.page, limit=PaginationDefault.limit, search=''}:IPaginationWithSearchType) => {
        try {
            const response = bannerService.getRequest("/banner", {
                params: {
                    page: page,
                    limit: limit,
                    search: search
                }
            })
            setData(response.data)    
            setPagination({
                current: +response.options.pagination.current,
                pageSize: +response.options.pagination.limit,
                total: +response.options.pagination.total
            }) 
        } catch {
            //console.error(exception);
            toast.error("Banner cannot be fetched", {
                description: "Banner cannot be fetched at this moment!!!"
            }) 
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getBannerList({
            page: PaginationDefault.page,
            limit:PaginationDefault.limit,
            search:null
        })
    }, [])

    const onPaginationChange = async (page: number, pageSize:number) => {
            await getBannerList ({page:page, limit:pageSize})
    }

    const ondeleteConfirm = async (bannerId: string) => {
        setLoading(true)
        try {
            bannerService.getRequest('/banner/' + bannerId)
            toast.success("Banner deleted successfully!!",{
                description: "Banner deleted successfully from the content"
            })
            await getBannerList({page: PaginationDefault.page, limit:PaginationDefault.limit})
        } catch {
            toast.error("Banner cannot be deleted!!!",{
                description:"Banner cannot be deleted due to some error..."
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getBannerList({page:PaginationDefault.page,limit:PaginationDefault.limit,search:search} )
        },1000)

        return ()=>{
            clearTimeout(timer);
        }
    },[search])
 return (
    <>
      <div className="flex flex-col gap-5">
          <div className="flex justify-between border-b border-b-gray-400 pb-3">
              <h1 className="text-4xl font-semibold text-teal-900"> Banner Page</h1>
              <div className="flex justify-center items-center gap-10">
                    <div className="flex w-[400px]">
                      <Input.Search size="large"  onChange={ (e) => {
                        setSearch(e.target.value);
                      }}/>
                    </div>
                   <NavLink
                      to={"/admin/banner/create"}
                      className={
                        "bg-teal-800! py-2 w-40 flex justify-center text-white! rounded-md hover:cursor-pointer transition hover:scale-96"
                      }
                    >
                     <PlusOutlined /> Add Banner
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col">
               <Table
                  columns= {columns}
                  dataSource={data as Readonly<IBannerData[]>}
                  rowKey={(data: IBannerData) => {
                    return data._id
                  }}
                  loading={loading}
                  pagination={{
                   ...pagination,
                    onChange: onPaginationChange
                  }}
                />
            </div>
      </div>
    </>
 )
};

export default BannerListPage;