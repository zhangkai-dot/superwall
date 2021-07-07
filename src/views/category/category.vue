<template>
  <div class="wrapper">
    <ul class="content">
      <li>这是列表1</li>
      <li>这是列表2</li>
      <li>这是列表3</li>
      <li>这是列表4</li>
      <li>这是列表5</li>
      <li>这是列表6</li>
      <li>这是列表7</li>
      <li>这是列表8</li>
      <li>这是列表9</li>
      <li>这是列表10</li>
      <li>这是列表11</li>
      <li>这是列表12</li>
      <li>这是列表13</li>
      <li>这是列表14</li>
      <li>这是列表15</li>
      <li>这是列表16</li>
      <li>这是列表17</li>
      <li>这是列表18</li>
      <li>这是列表19</li>
      <li>这是列表20</li>
      <li>这是列表21</li>
      <li>这是列表22</li>
      <li>这是列表23</li>
      <li>这是列表24</li>
      <li>这是列表25</li>
      <li>这是列表26</li>
      <li>这是列表27</li>
      <li>这是列表28</li>
      <li>这是列表29</li>
      <li>这是列表30</li>
      <li>这是列表31</li>
      <li>这是列表32</li>
      <li>这是列表33</li>
      <li>这是列表34</li>
      <li>这是列表35</li>
      <li>这是列表36</li>
      <li>这是列表37</li>
      <li>这是列表38</li>
      <li>这是列表39</li>
      <li>这是列表40</li>
      <li>这是列表41</li>
      <li>这是列表42</li>
      <li>这是列表43</li>
      <li>这是列表44</li>
      <li>这是列表45</li>
      <li>这是列表46</li>
      <li>这是列表47</li>
      <li>这是列表48</li>
      <li>这是列表49</li>
      <li>这是列表50</li>
      <li>这是列表51</li>
      <li>这是列表52</li>
      <li>这是列表53</li>
      <li>这是列表54</li>
      <li>这是列表55</li>
      <li>这是列表56</li>
      <li>这是列表57</li>
      <li>这是列表58</li>
      <li>这是列表59</li>
      <li>这是列表60</li>
      <li>这是列表61</li>
      <li>这是列表62</li>
      <li>这是列表63</li>
      <li>这是列表64</li>
      <li>这是列表65</li>
      <li>这是列表66</li>
      <li>这是列表67</li>
      <li>这是列表68</li>
      <li>这是列表69</li>
      <li>这是列表70</li>
      <li>这是列表71</li>
      <li>这是列表72</li>
      <li>这是列表73</li>
      <li>这是列表74</li>
      <li>这是列表75</li>
      <li>这是列表76</li>
      <li>这是列表77</li>
      <li>这是列表78</li>
      <li>这是列表79</li>
      <li>这是列表80</li>
      <li>这是列表81</li>
      <li>这是列表82</li>
      <li>这是列表83</li>
      <li>这是列表84</li>
      <li>这是列表85</li>
      <li>这是列表86</li>
      <li>这是列表87</li>
      <li>这是列表88</li>
      <li>这是列表89</li>
      <li>这是列表90</li>
      <li>这是列表91</li>
      <li>这是列表92</li>
      <li>这是列表93</li>
      <li>这是列表94</li>
      <li>这是列表95</li>
      <li>这是列表96</li>
      <li>这是列表97</li>
      <li>这是列表98</li>
      <li>这是列表99</li>
      <li>这是列表100</li>
    </ul>
  </div>
</template>

<script>
import BSscroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BSscroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
};
</script>

<style>
.wrapper {
  height: 150px;
  background-color: var(--color-high-text);
}
</style>