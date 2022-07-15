/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

 export declare namespace API {
  export interface YakitPluginResponse {
    id: number;
    uuid: string;
  }
  export interface YakitPluginParam {
    field: string;
    default_value: string;
    type_verbose: string;
    field_verbose: string;
    help: string;
    required?: boolean;
    group?: string;
    extra_setting?: string;
    buildIn_param?: boolean;
  }
  export interface YakitPluginListResponse extends Paging {
    data: YakitPluginDetail[];
  }
  export interface YakitPluginDetailResponse {
    data: YakitPluginDetail;
  }
  export interface YakitPluginDetail extends GormBaseModel, YakitPlugin {}
  export interface YakitPlugin {
    type: string;
    script_name: string;
    default_open: boolean;
    tags: string;
    content: string;
    params?: YakitPluginParam[];
    authors: string;
    user_id?: number;
    head_img?: string;
    /**
     * 插件发布的时间
     */
    published_at: number;
    /**
     * 下载次数
     */
    downloaded_total: number;
    /**
     * 获得推荐的次数
     */
    stars: number;
    /**
     * 审核状态
     */
    status: number;
    official: boolean;
    /**
     * 当前用户是否已点赞
     */
    is_stars: boolean;
    help?: string;
    enable_plugin_selector?: boolean;
    plugin_selector_types?: string;
    is_general_module?: boolean;
    comment_num: number;
    contributors?: string;
    uuid: string;
  }
  export interface UserOrdinaryResponse {
    data: UserList[];
  }
  export interface UserListResponse extends Paging {
    data: UserList[];
  }
  export interface UserList {
    tags: string[];
    id: number;
    created_at: number;
    updated_at: number;
    name: string;
    from_platform: string;
    email?: string;
    appid: string;
    head_img: string;
  }
  export interface UserData {
    from_platform: string;
    email: string;
    appid: string;
    head_img: string;
    name: string;
    token: string;
    role: string;
    user_id: number;
  }
  export interface UpdateUserRole {
    appid: string;
    operation: string;
  }
  export interface SaveYakitPlugin {
    id?: number;
    type?: string;
    content?: string;
    params?: YakitPluginParam[];
    help?: string;
    tags?: string[];
    script_name: string;
    published_at?: number;
    default_open: boolean;
    enable_plugin_selector?: boolean;
    plugin_selector_types?: string;
    is_general_module?: boolean;
    download_total?: number;
    contributors?: string;
  }
  export interface Principle {
    user: string;
    role: string;
    user_id: number;
    head_img: string;
  }
  export interface PluginDownloads {
    type: string;
    script_name: string;
    default_open: boolean;
    tags: string;
    content: string;
    params?: YakitPluginParam[];
    user_id?: number;
    /**
     * 插件发布的时间
     */
    published_at: number;
    /**
     * 下载次数
     */
    downloaded_total: number;
    /**
     * 获得推荐的次数
     */
    stars: number;
    /**
     * 审核状态
     */
    status: number;
    official: boolean;
    help?: string;
    enable_plugin_selector?: boolean;
    plugin_selector_types?: string;
    is_general_module?: boolean;
    /**
     * true 为私有
     */
    is_private: boolean;
    authors: string;
    contributors: string;
    uuid: string;
  }
  export interface PluginDownloadResponse extends Paging {
    data: PluginDownloadDetail[];
  }
  export interface PluginDownloadDetail
    extends GormBaseModel,
      PluginDownloads {}
  export interface PluginDownload {
    /**
     * 下载所有 all
     */
    type?: string;
    /**
     * 单个，批量下载传uuid
     */
    uuid?: string[];
    token?: string;
    page?: number;
    limit?: number;
  }
  export interface Paging {
    pagemeta: PageMeta;
  }
  export interface PageMeta {
    /**
     * 页面索引
     */
    page: number;
    /**
     * 页面数据条数限制
     */
    limit: number;
    /**
     * 总共数据条数
     */
    total: number;
    /**
     * 总页数
     */
    total_page: number;
  }
  export interface OperationsResponse extends Paging {
    data: Operation[];
  }
  export interface Operation extends GormBaseModel, NewOperation {}
  export interface NewYakitPlugin {
    id?: number;
    type?: string;
    content?: string;
    params?: YakitPluginParam[];
    help?: string;
    tags?: string[];
    script_name: string;
    published_at?: number;
    default_open: boolean;
    enable_plugin_selector?: boolean;
    plugin_selector_types?: string;
    is_general_module?: boolean;
    download_total?: number;
    contributors?: string;
  }
  export interface NewOperation {
    type: string;
    trigger_user_unique_id: string;
    operation_plugin_id: string;
    extra?: string;
  }
  export interface NewComment {
    plugin_id: number;
    by_user_id?: number;
    message_img?: string[];
    parent_id?: number;
    root_id?: number;
    message: string;
  }
  export interface GormBaseModel {
    id: number;
    created_at: number;
    updated_at: number;
  }
  export interface CommentListResponse extends Paging {
    data: CommentListData[];
  }
  export interface CommentListData {
    id: number;
    created_at: number;
    updated_at: number;
    plugin_id: number;
    root_id: number;
    parent_id: number;
    user_id: number;
    user_name: string;
    head_img: string;
    message: string;
    message_img: string;
    like_num: number;
    by_user_id: number;
    by_user_name: string;
    by_head_img: string;
    reply_num: number;
    is_stars?: boolean;
  }
  export interface ActionSucceeded {
    /**
     * 来源于哪个 API
     */
    from: string;
    /**
     * 执行状态
     */
    ok: boolean;
  }
  export interface ActionFailed {
    /**
     * 来源于哪个 API
     */
    from: string;
    /**
     * 执行状态
     */
    ok: boolean;
    reason: string;
  }
}
