# 新闻站点(前端+后台) [开发详记]
 
此项目的出发点建立于,虽在工作中涉及过react框架,但总的来说还是很浅显的使用,所以决定从前至后写一个基于react框架的新闻站点,在此记录开发过程中遇到的问题与心得。<br/>
> ## 项目中涉及到的框架、工具、插件、技术...
>> 比较杂,我这里就用到什么记什么了  ^_^
>> ### react、react-router、ant design、webpac、vs code(这里推荐CTRL+ 1键左边的点 ,可调用内部的终端,使用方法和git bash一样,可以直接键入命令行,方便)、react-responsive
<br/>

# 功能
- 更多功能更新中...
<br/>

# 开发记录
### 2018年3月20日
- 学习了webpack的基本使用方法,与此工具的优势用处等特点。
- 配置了项目中webpack的环境。
- 遇到的bug
  - 项目无法跑起来,一直提示↓ #淘宝镜像更换方法#
<br/>![error_1](https://i.ooxx.ooo/2018/03/20/6f7b90bd2f277449d3dec43ba4521f45.png)
<br/>
  后来在频繁的npm install中发现,原来是因为依赖安装不完整,是公司的网络导致。遂更换淘宝镜像即可。淘宝镜像安装方法如下
<br/>
  1.win+r 输入cmd 打开黑窗口
<br/>
  2.输入npm install -g cnpm --registry=https://registry.npm.taobao.org 回车安装(安装成功后可输入 cnpm -v 查看版本,是否安装成功)
<br/>
  3.回到项目目录(package.json所在目录) 打开git bash
<br/>
  4.输入 cnpm install安装依赖
<br/>
  5.依赖安装完成后 npm start即可

### 2018年3月22日
- 昨天无意中了解到,我一直纠结的webpack问题,原来可以很轻松的解决.其实在`create-react-app`这个React项目自动构建的脚手架中就已经内置了webpack,并且已经配置好了,只要通过 `npm run build` 即可将打包后的内容放置项目目录中,随后可通过提示的命令,在本地测试打包后的项目
- 小tip,项目介绍页可放置github pages中,免费的服务器,在这我理解为这是QQ空间一样。 哈哈
- 考虑到移动端,要使用媒体查询,则选择用了 react-responsive,通过命令`cnpm install react-responsive --save` 安装即可。
  - 例 ↓
    ```
    <MediaQuery query='(min-device-width: 1224px)'>
      <Pc_index/>
    </MediaQuery>
    ```
- 今天完成了Pc、Mobile的header、footer部分,来活了,忙项目咯。 ***14点55分***

### 2018年3月26日
- 完成了pc端的登陆注册部分。    18点52分
- 补一下昨天做的那一部分的详述
  -  这里的数据请求使用的是fetch,比较舒服的是安装好了直接调用就好。具体使用方法可以百度,在github上直接查 fetch 会找到项目,上面的md文档介绍也很清楚。  https://github.com/github/fetch
  -   然后引用了很多ANTD上的组件,这些这些组件的介绍和api建议去看antd的官方文档,避免更新后的变化带来使用上的不便,毕竟官方文档一直都是最新的。form组件有个小坑要注意一下,js最后记得Form.create!  具体看antd Form处的api介绍

### 2018年3月27日
-  完成了移动端的登录注册部分。14点29分
-  总结一下(主要看源码即可)
   -  网络的请求使用的组件是Fetch
   -  样式的组件使用的是Ant可以参考源码 
- 完成了Pc、移动端的登出部分。 15点56分
- 完成了移动端的导航部分。16点22分 
- #### tip 项目开发前先进行详细的模块划分,提升代码的复用率高效开发。
