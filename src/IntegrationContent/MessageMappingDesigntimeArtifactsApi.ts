/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageMappingDesigntimeArtifacts } from './MessageMappingDesigntimeArtifacts';
import { MessageMappingDesigntimeArtifactsRequestBuilder } from './MessageMappingDesigntimeArtifactsRequestBuilder';
import { ResourcesApi } from './ResourcesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class MessageMappingDesigntimeArtifactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessageMappingDesigntimeArtifactsApi<DeSerializersT> {
    return new MessageMappingDesigntimeArtifactsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ResourcesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      RESOURCES: new Link('Resources', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MessageMappingDesigntimeArtifacts;

  requestBuilder(): MessageMappingDesigntimeArtifactsRequestBuilder<DeSerializersT> {
    return new MessageMappingDesigntimeArtifactsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MessageMappingDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageMappingDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MessageMappingDesigntimeArtifacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageMappingDesigntimeArtifacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTIFACT_CONTENT: EdmTypeField<
      MessageMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageMappingDesigntimeArtifacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link packageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'PackageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link artifactContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_CONTENT: fieldBuilder.buildEdmTypeField(
          'ArtifactContent',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageMappingDesigntimeArtifacts)
      };
    }

    return this._schema;
  }
}
