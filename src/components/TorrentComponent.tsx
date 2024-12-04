import { Text, View } from "react-native";
import { QbTorrent, TorrentFile } from "../types/QbTorrent";
import { Button, Modal, Portal } from "react-native-paper";
import { useEffect, useState } from "react";

interface TorrentCompProp {
    // torrent: QbTorrent,
}
// 名称 进度(百分比) 总大小 已下载大小 状态
// 添加日期 完成日期 上次活动时间
export const TorrentComponent: React.FC<TorrentCompProp> = ({}) => {
    
    const [visibleModal, setVisibleModal] = useState(false);
    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const [loadingFiles, setLoadingFiles] = useState(false);
    const [files, setFiles] = useState<TorrentFile[]>([]);

    const handleShowFiles = async () => {
        showModal();
        setLoadingFiles(true);

        // setFiles(await QbTorrent.getFiles());
    }

    return (
        <View className="flex-col h-28 w-full justify-between border rounded-lg border-gray bg-slate-100">
            <View className="flex-row justify-between items-center pt-2 px-1 flex">
                <View className="flex-row items-center">
                    <View className="mr-4">
                        <Text className="text-lg text-bold text-black">名称</Text>
                    </View>
                    <View>
                        <Text className="text-sm text-yellow-800">状态</Text>
                    </View>
                </View>
                <View className="bg-slate-1 border rounded-lg h-8 w-24 flex flex-row justify-center items-center overflow-hidden">
                    <View className="absolute h-full bg-red-500 left-0" style={{width: `${90}%`}}></View>
                    <View className="p-1/2 w-8 flex-row justify-center items-center">
                        <Text className="text-sm text-black">10%</Text>
                    </View>
                </View>
            </View>
            <View className="px-1 flex-row justify-between items-center">
                <View>
                    <Text className="text-base text-black">已下载/总大小</Text>
                </View>
                <View className="">
                    <Portal>
                        <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20, margin: 30, borderRadius: 20 }}>
                        <View>
                            <Text>Torrent Component</Text>
                        </View>
                        </Modal>
                    </Portal>
                    <Button mode="text" compact icon={'list-status'} onPress={showModal}>检查文件</Button>
                </View>
            </View>
            <View className="flex w-full flex-row justify-between items-center pb-2 px-1">
                <View>
                    <Text className="text-sm text-black">yyyy-MM-dd HH:mm:ss ~ yyyy-MM-dd HH:mm:ss</Text>
                </View>
                <View>
                    <Text className="text-sm text-black">上次活动: yyyy-MM-dd HH:mm:ss</Text>
                </View>
            </View>
        </View>
    )
}