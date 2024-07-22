# WeMC新手插件进阶教程Ⅰ
前景回顾:在上篇文章我们成功的配置出了Java插件服.

这次我们就来让服务器变得<Badge type="tip" text="Beautiful" />一些.

首先,我们要改掉那美丽的,服务器默认配置的图标和介绍文字.

不过我们需要了解一下他们的定义:

其中图标指的是`ICO(N)`而介绍文字指的是`MOTD`.

_不过我们通常将其统称为MOTD_

很好,我相信你一定懂了.那么我们就来实操一下罢!

------

不过我想讲个小故事:

MC从原始时代进化到插件时代,每一次都会更加Beautiful和Easy.

那么我们就先介绍下修改MOTD的"石器时代"罢~

没错,就是Minecraft官方提供的"原始修改方法",我们又恨又爱的`server.properties`,在其中找到`motd`,将其改为你想要的介绍,`保存`并重启服务器后你就能看到了————结果不尽如人意...

草,那么怎么办呢,聪明的你成功的进化到了"插件时代",你想起来了你是插件服啊!

于是你下载了`MiniMotd`后也是成功丢到`plugins`文件夹后且重启了.

但是你发现并没有任何变化.

这是因为你连改都不带改的.

那么我就手把手的教你们罢.

不过我要吊一下你的胃口:

![An image](image.png)

好了,你下载完了`MiniMotd`后也成功丢到`plugins`文件夹后且重启了,那么不出意外的话你能在`plugins`里面看到一个`MiniMotd`的文件夹,打开,里面不出意外的话是有一个叫做`main.conf`的文件.

不出以外的话默认配置是这样的

```yaml:line-numbers {1}
# MiniMOTD Main Configuration

# Enable server list icon related features
icon-enabled=true
# Enable MOTD-related features
motd-enabled=true
# The list of MOTDs to display
#
# - Supported placeholders: {onlinePlayers}, {maxPlayers}
# - Putting more than one will cause one to be randomly chosen each refresh
motds=[
    {
        # Set the icon to use with this MOTD
        #  Either use 'random' to randomly choose an icon, or use the name
        #  of a file in the icons folder (excluding the '.png' extension)
        #    ex: icon="myIconFile"
        icon=random
        line1="<rainbow>MiniMOTD Default"
        line2="MiniMessage <gradient:blue:red>Gradients"
    },
    {
        # Set the icon to use with this MOTD
        #  Either use 'random' to randomly choose an icon, or use the name
        #  of a file in the icons folder (excluding the '.png' extension)
        #    ex: icon="myIconFile"
        icon=random
        line1="<blue>Another <underlined><bold><red>MOTD"
        line2="<italic><gradient:red:green>much wow</gradient>"
    }
]
player-count-settings {
    # Setting this to true will disable the hover text showing online player usernames
    disable-player-list-hover=false
    # Settings for the fake player count feature
    fake-players {
        # Modes: static, random, percent
        #
        # - static: This many fake players will be added
        #     ex: fakePlayers: "3"
        # - random: A random number of fake players in this range will be added
        #     ex: fakePlayers: "3:6"
        # - percent: The player count will be inflated by this much, rounding up
        #     ex: fakePlayers: "25%"
        fake-players="25%"
        # Enable fake player count feature
        fake-players-enabled=false
    }
    # Setting this to true will disable the player list hover (same as 'disable-player-list-hover'),
    # but will also cause the player count to appear as '???'
    hide-player-count=false
    # Changes the Max Players to be X more than the online players
    # ex: x=3 -> 16/19 players online.
    just-x-more-settings {
        # Enable this feature
        just-x-more-enabled=false
        x-value=3
    }
    # Changes the Max Players value
    max-players=69
    # Enable modification of the max player count
    max-players-enabled=true
}
```

我知道我们有许多九年义务教育的漏网之鱼看不懂,没事,我们翻译一下就是这样子的:

```yaml:line-numbers {1}
# MiniMOTD插件主要配置文件 汉化By YSY 纯手工汉化

# 启用有关服务器ICON图标的相关功能
icon-enabled=true
# 启用有关服务器MOTD介绍的相关功能
motd-enabled=true
# 要显示的MOTD列表
#
# - 支持的变量: {onlinePlayers}在线玩家, {maxPlayers}可容纳的最大玩家
# - 如果添加多个，则每次刷新时将随机选择其中一个
motds=[
    {
        # 设置该MOTD使用时所显示的图标
        # 要么使用"random"随机选择文件夹中的任意一个图标,要么继续使用指定的图标(不包含.png的后缀)
        # 示例: icon="myIconFile"
        icon=random
        line1="<rainbow>MiniMOTD 默认配置"
        line2="MiniMessage <gradient:blue:red>Gradients"
    },
    {
        # 设置该MOTD使用时所显示的图标
        # 要么使用"random"随机选择文件夹中的任意一个图标,要么继续使用指定的图标(不包含.png的后缀)
        # 示例: icon="myIconFile"
        icon=random
        line1="<blue>另一个<underlined><bold><red>MOTD"
        line2="<italic><gradient:red:green>更多 wow</gradient>"
    }
]
player-count-settings {
    # 如果将此设置设为true将不会显示在线玩家用户名(即你鼠标移向0/0之类的在线人数所悬浮出来的文字)
    disable-player-list-hover=false
    # 假人玩家的相关设置
    # 这个功能可能就是让别人觉你的服务器人多热闹来玩,不过如果人本来就少(TAB列表可以放得下)则玩家容易一眼识破而失去信任.推荐服务器玩家特别多,且特别热闹时悄悄的加上十几个(TAB页面正常装不下时玩家就无法验证/懒得验证真假)
    fake-players {
        # 模式: 固定,随机,百分比
        #
        # - 固定模式: 即在原有的玩家数上再加上一个你自定义的数
        #   例子: fakePlayers: "3"
        #   即在原有玩家数X上变成X+3人
        # - 随机模式: 在所设定的数值范围内随机添加假玩家
        #   例子: fakePlayers: "3:6"
        #   即在原有玩家数Y上变成Y+(3~6)(3~6之间的任何一个整数)
        # - 百分比模式: 在玩家原有的数量上再加上你所设定的一部分假玩家
        #   例子: fakePlayers: "25%"
        #   即在原有玩家数Z上变成Z+25%Z也就是125%Z=1.25Z
        fake-players="25%"
        # 是否启用假人玩家显示功能
        fake-players-enabled=false
    }
    # 将此设置为true将禁用玩家列表显示(即你鼠标移向0/0之类的在线人数所悬浮出来的文字,就跟那个'disable-player-list-hover'),
    # 但也会导致玩家数量显示为'???'
    hide-player-count=false
    # 改最大可容纳玩家比在线玩家多多少人
    # 例子: x=3 -> 16/19 在线玩家/最大玩家
    # 即可动态调整的最大玩家,最大玩家=目前在线玩家+3
    # 作用可能是让玩家觉得你服务器很火爆,以至于快要挤满了,便好奇的进来看看,然后人就越来越多,让别的路过的玩家觉得服务器人数上限变高了欸!然后陷入良性循环...
    just-x-more-settings {
        # 启用此功能
        just-x-more-enabled=false
        x-value=3
    }
    # 改变最大可容纳玩家数量
    max-players=69
    # 是否允许修改最大玩家数
    max-players-enabled=true
}
```

好了经过这么一通翻译你看懂了吗?

但是此时聪明的你就要提问了:我看某服务器的MOTD真好看欸,能不能偷过来啊?

尽管非常不道德,但是也是有办法的:

- 你自己对着他的服务器截个图,抠出来图标
- 对着MOTD,手工来抄.

当然,也有半自动的办法的:

- 打开[[神秘小网站]](https://motd.gg/)
- 点击`Grab from server`的按钮并且输入你喜欢的那个服务器的IP/域名
- 回车,大功告成!
- 然后你就可以点击`Get your MOTD`获取或者在此基础上修改(格式为原版`server.properties`内)
- 其中如果`Escape`按钮处于关闭则是原版的颜色符号,如果开启则是Unicode字符的颜色符号
- 如果你点击`In-Game Preview`则会在下面显示一个连接地址,复制后打开MC,在多人游戏中添加这个服务器,你就可以在游戏中预览这个MOTD效果如何
- 如果你不是原版,使用的插件的话请老老实实的对着MOTD慢慢copy罢

欸欸欸,请留步:

某些服务器可以实现**渐变色**的效果和每刷新一次就有不同的MOTD和服务器图标,这他妈是怎么做到的呢?接下来请跟随小编一起进入这神奇的世界吧

如果你详细的阅读了上面的配置文件,你应该会遇到一个你不太理解的东西`MiniMessage`,那么他的定义和解释是这样的:"`MiniMessage` 是一种基于字符串的格式, 以一种易于编辑且人类可读 (human-readable) 的形式表示 `Minecraft 聊天组件`."

好吧,我笃定你不大可能会理解,那么我们再请出我们的翻译器翻译下罢:

`MiniMessage是一种字符串的格式,机器能懂人也能懂的Minecraft的组件`.

什么?还不懂?

`MiniMessage是一种格式,用于Minecraft的新型颜色格式`

懂了吧?

而好巧不巧,`MiniMOTD`,`MiniMessage`,~~一看就是亲兄弟啊~~,所以`MiniMOTD`支持`MiniMessage`.

下面开始实操:

当然如果你觉得你懂了请看[[MiniMessage-Wiki]](https://adventure-docs.minecraft.kim/minimessage.html)

好了废话不多说我们开干:

英语学过吧

就以黄色举例,他的英文单词为yellow

那么想让文字变黄我们就可以`<yellow>就跟你脑子颜色一样</yellow>`

当然也可以`<yellow>Hello <blue>World</blue>!`

![image](minimotd.png)

没错,两个`<tag>`标签括住,其他就是开头标签.

当然,下划线和加粗我们都知道吧,他包有的啊

`<underlined>This is <bold>important</bold>!`我们来猜一猜:

![motd](motd2.png)

没错,下划线是`<underlined>`加粗是`<bold>`

那么心心念念的彩虹捏?

```yaml
<yellow>Woo: <rainbow>||||||||||||||||||||||||</rainbow>!
<yellow>Woo: <rainbow:!>||||||||||||||||||||||||</rainbow>!
<yellow>Woo: <rainbow:2>||||||||||||||||||||||||</rainbow>!
<yellow>Woo: <rainbow:!2>||||||||||||||||||||||||</rainbow>!
```
(其实我感觉都差不多)

![3](motd3.png)

of course,渐变色也是嘎嘎好看的,那么怎么做捏

```yaml
<yellow>Woo: <gradient>||||||||||||||||||||||||</gradient>!
<yellow>Woo: <gradient:#5e4fa2:#f79459>||||||||||||||||||||||||</gradient>!
<yellow>Woo: <gradient:#5e4fa2:#f79459:red>||||||||||||||||||||||||</gradient>!
<yellow>Woo: <gradient:green:blue>||||||||||||||||||||||||</gradient>!
```
:::tip MiniMOTD支持16进制颜色
如标题所言,我们看上面的第二,第三个示例的时候发现他是#XXXXXX的格式,这就是16进制颜色

其中第一个指的是起始颜色,第二个是终止颜色,只要你搭配的好,屎都能变好看）

什么?不知道配什么渐变色?我这里有一个我常用的[[渐变色网站]](https://webgradients.com)
:::
![4](motd4.png)

当然还有些奇奇怪怪和好玩的请自行去源Wiki发掘（

还有这个!

```yaml
<transition:#00ff00:#ff0000:0>|||||||||</transition>

<transition:white:black:red:[phase]>Hello world [phase]</transition>
```

你看图片能猜出他的作用嘛?
![5](motd5.png)

:::details
第一行是从#00ff00到#ff0000进行渐变

第二行是从白色到红色进行渐变

好吧我自己也没尝试,因为觉得没多大用就没用了()
:::

鬼知道呢?

好吧MOTD写完了,再随便讲讲ICON罢

文件夹下不止可以放1张图片,很多,很多,很多张,你可以设置只用里面的固定一张或者轮换用或者随机用等(翻上面的配置文件)

:::danger 没记错吧
它有一些要求:

首先图片后缀要求为`.png`

其次分辨率必须为一下几个`16x16`,`32x32`或者`64x64`

最后别忘了/minimotd reload重载看看效果哦
:::

我靠?你只有jpg之类的图片怎么办?去[[这个网站]](https://www.aconvert.com/cn/image/jpg-to-png/)转换一下就OK啦
