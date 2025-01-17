import Book from "./book";
import EpubCFI from "./epubcfi";
import Rendition from "./rendition";
import Contents from "./contents";
import Layout from "./layout";
import ePub from "./epub";
import IframeView from "./managers/views/iframe";
import DefaultViewManager from "./managers/default/index";

export default ePub;
export {
	Book,
	EpubCFI,
	Rendition,
	Contents,
	Layout,
	IframeView,
	DefaultViewManager
};
