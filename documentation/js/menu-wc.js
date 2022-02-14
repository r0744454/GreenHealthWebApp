'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">greenhealth-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-38eeabc7ac1d9e41b2d847a87d5f127065159e1076bc08b0fa96b13dc59b908501dad1ce799a5a42655e66d84ca95c93ec0c21c14d42e2dde880b154448873ff"' : 'data-target="#xs-components-links-module-AppModule-38eeabc7ac1d9e41b2d847a87d5f127065159e1076bc08b0fa96b13dc59b908501dad1ce799a5a42655e66d84ca95c93ec0c21c14d42e2dde880b154448873ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-38eeabc7ac1d9e41b2d847a87d5f127065159e1076bc08b0fa96b13dc59b908501dad1ce799a5a42655e66d84ca95c93ec0c21c14d42e2dde880b154448873ff"' :
                                            'id="xs-components-links-module-AppModule-38eeabc7ac1d9e41b2d847a87d5f127065159e1076bc08b0fa96b13dc59b908501dad1ce799a5a42655e66d84ca95c93ec0c21c14d42e2dde880b154448873ff"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticatedModule.html" data-type="entity-link" >AuthenticatedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-658c764612ba6ca299d7080498a0786bce2aaeb27c8dd3d730c194f766dc91042abc8319b293a4cc190b685b8063cff0a38201a9303d9430b83642af4ce295e9"' : 'data-target="#xs-components-links-module-AuthenticationModule-658c764612ba6ca299d7080498a0786bce2aaeb27c8dd3d730c194f766dc91042abc8319b293a4cc190b685b8063cff0a38201a9303d9430b83642af4ce295e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-658c764612ba6ca299d7080498a0786bce2aaeb27c8dd3d730c194f766dc91042abc8319b293a4cc190b685b8063cff0a38201a9303d9430b83642af4ce295e9"' :
                                            'id="xs-components-links-module-AuthenticationModule-658c764612ba6ca299d7080498a0786bce2aaeb27c8dd3d730c194f766dc91042abc8319b293a4cc190b685b8063cff0a38201a9303d9430b83642af4ce295e9"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-560a662a4abf62ffe112281a62d5f1c36f15bc59c03a9093d658f15eae505d1ba73039f2596b29a082ff731489ec196f4cc2567327e10389ee3ecef4e74b0774"' : 'data-target="#xs-injectables-links-module-SecurityModule-560a662a4abf62ffe112281a62d5f1c36f15bc59c03a9093d658f15eae505d1ba73039f2596b29a082ff731489ec196f4cc2567327e10389ee3ecef4e74b0774"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-560a662a4abf62ffe112281a62d5f1c36f15bc59c03a9093d658f15eae505d1ba73039f2596b29a082ff731489ec196f4cc2567327e10389ee3ecef4e74b0774"' :
                                        'id="xs-injectables-links-module-SecurityModule-560a662a4abf62ffe112281a62d5f1c36f15bc59c03a9093d658f15eae505d1ba73039f2596b29a082ff731489ec196f4cc2567327e10389ee3ecef4e74b0774"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-f305ea3e1e89a98bfd902f4417c8c926b096ec5bd20b60cc78e1e83eb6d895387ea924c30d55cfa359fb1830add09d9ff4ecdf8088f601db811152717a080c20"' : 'data-target="#xs-injectables-links-module-ServicesModule-f305ea3e1e89a98bfd902f4417c8c926b096ec5bd20b60cc78e1e83eb6d895387ea924c30d55cfa359fb1830add09d9ff4ecdf8088f601db811152717a080c20"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-f305ea3e1e89a98bfd902f4417c8c926b096ec5bd20b60cc78e1e83eb6d895387ea924c30d55cfa359fb1830add09d9ff4ecdf8088f601db811152717a080c20"' :
                                        'id="xs-injectables-links-module-ServicesModule-f305ea3e1e89a98bfd902f4417c8c926b096ec5bd20b60cc78e1e83eb6d895387ea924c30d55cfa359fb1830add09d9ff4ecdf8088f601db811152717a080c20"' }>
                                        <li class="link">
                                            <a href="injectables/AnalysisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlantService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlotService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResultService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-62e202155ca848d53fcb7c9c0c5e639800b60d9b45342ae6623f36a61f168e64a0341c48f74f8394559c64d64f7fe9ca546dd34254297538038c489c10127304"' : 'data-target="#xs-components-links-module-SharedModule-62e202155ca848d53fcb7c9c0c5e639800b60d9b45342ae6623f36a61f168e64a0341c48f74f8394559c64d64f7fe9ca546dd34254297538038c489c10127304"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-62e202155ca848d53fcb7c9c0c5e639800b60d9b45342ae6623f36a61f168e64a0341c48f74f8394559c64d64f7fe9ca546dd34254297538038c489c10127304"' :
                                            'id="xs-components-links-module-SharedModule-62e202155ca848d53fcb7c9c0c5e639800b60d9b45342ae6623f36a61f168e64a0341c48f74f8394559c64d64f7fe9ca546dd34254297538038c489c10127304"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-7d55e34bdec55e123b8a25909a349a9ef5cb68fae002cd721ccb82b248f82a1a73dcb73db3b7609ead1a11a2847ea9a2b77cc7d69fc8a7c1408ffd4fe2836fe7"' : 'data-target="#xs-components-links-module-UserModule-7d55e34bdec55e123b8a25909a349a9ef5cb68fae002cd721ccb82b248f82a1a73dcb73db3b7609ead1a11a2847ea9a2b77cc7d69fc8a7c1408ffd4fe2836fe7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-7d55e34bdec55e123b8a25909a349a9ef5cb68fae002cd721ccb82b248f82a1a73dcb73db3b7609ead1a11a2847ea9a2b77cc7d69fc8a7c1408ffd4fe2836fe7"' :
                                            'id="xs-components-links-module-UserModule-7d55e34bdec55e123b8a25909a349a9ef5cb68fae002cd721ccb82b248f82a1a73dcb73db3b7609ead1a11a2847ea9a2b77cc7d69fc8a7c1408ffd4fe2836fe7"' }>
                                            <li class="link">
                                                <a href="components/AnalysisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlantCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlantDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlotCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlotDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlotOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingmodule.html" data-type="entity-link" >UserRoutingmodule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConnectionStrings.html" data-type="entity-link" >ConnectionStrings</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalysisService.html" data-type="entity-link" >AnalysisService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlantService.html" data-type="entity-link" >PlantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlotService.html" data-type="entity-link" >PlotService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResultService.html" data-type="entity-link" >ResultService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationService.html" data-type="entity-link" >TranslationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SecurityInterceptor.html" data-type="entity-link" >SecurityInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link" >AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entry.html" data-type="entity-link" >Entry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entry-1.html" data-type="entity-link" >Entry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entry-2.html" data-type="entity-link" >Entry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLInputEvent.html" data-type="entity-link" >HTMLInputEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale.html" data-type="entity-link" >Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale-1.html" data-type="entity-link" >Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale-2.html" data-type="entity-link" >Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/localeDefinition.html" data-type="entity-link" >localeDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/localeFile.html" data-type="entity-link" >localeFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Organisation.html" data-type="entity-link" >Organisation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plant.html" data-type="entity-link" >Plant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plot.html" data-type="entity-link" >Plot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Season.html" data-type="entity-link" >Season</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});